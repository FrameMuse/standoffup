// Defines

const USER_SET_DATA = "INVENTORY/SET_DATA";

// Reducer

const user = (current = { balance: 0.30, authed: true, username: "Викуторт", avatar: "/assets/img/avatar.png" }, dispatch) => {
    switch (dispatch.type) {
        case USER_SET_DATA:
            return {
                ...current,
                ...dispatch.data
            };
        default: return current;
    }
}

// Actions

export const setUserData = data => ({
    type: USER_SET_DATA,
    data: data
});

export default user;