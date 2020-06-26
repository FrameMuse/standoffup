// Defines

const USER_SET_DATA = "INVENTORY/SET_DATA";

// Types

const referals = {
    referals: 70,
    rankImage: "/assets/img/rank.png",
    nextLvl: 2,
    leftTillLvlUp: 100,
    referalProgress: 75 // Percent
};

// Reducer

const user = (current = { balance: 0.30, authed: true, username: "Викуторт", avatar: "/assets/img/avatar.png", ...referals }, dispatch) => {
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