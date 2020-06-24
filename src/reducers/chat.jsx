
// Defines

const CHAT_UPDATE_ONLINE = "CHAT/UPDATE_ONLINE";
const CHAT_ADD_MESSAGE = "CHAT/UPDATE_ONLINE";
const CHAT_TOGGLE = "CHAT/TOGGLE";

// Types

const message = {
    avatar: "/assets/img/avatar.png",
    username: "CmeTanKa",
    time: "17:15",
    message: "Поделитесь скинами))"
};

// Reducer

const chat = (current = { online: 678, messages: [message, message, message, message, message], hidden: false }, dispatch) => {
    switch (dispatch.type) {
        case CHAT_UPDATE_ONLINE:
            return {
                ...current,
                online: dispatch.online
            };
        case CHAT_ADD_MESSAGE:
            current.messages.push(dispatch.message);
            return { ...current };
        case CHAT_TOGGLE:
            return {
                ...current,
                hidden: !current.hidden
            };

        default: return current;
    }
};

// Actions

export const updateOnline = online => ({
    type: CHAT_UPDATE_ONLINE,
    online: online
});

export const addMessage = message => ({
    type: CHAT_ADD_MESSAGE,
    message: message
});

export const toggleChat = _ => ({
    type: CHAT_TOGGLE
});

export default chat;