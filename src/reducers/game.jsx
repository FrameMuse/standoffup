// Defines

const GAME_ADD_HASH = "GAME/ADD/HASH";
const GAME_ADD_MATCH = "GAME/ADD/MATCH";
const GAME_REMOVE_MATCH = "GAME/REMOVE/MATCH";
const MOBILE_MENU = "MOBILE_MENU/TOGGLE";

// Types

const hash = { color: "myGlass", value: 13.51 };
const match = {
    price: 567.21,
    status: "playing",
    weapons: ["/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png", "/assets/img/mp7.png"],
    avatar: "/assets/img/avatar.png"
};
const match1 = {
    ...match,
    status: "loss"
};
const match2 = {
    ...match,
    status: "won"
};
const currentDefault = {
    matches: [match, match1, match, match2, match, match, match, match, match, match, match, match],
    stats: {
        players: 506,
        total: 1675.13,
        skins: 561
    },
    hashes: [hash, hash, hash, hash, hash, hash, hash, hash, hash, hash, hash, hash, hash, hash, hash],
    bet: 75.21,
    weapon: {
        source: "/assets/img/mp7.png",
        name: "MP7",
        alias: "2 Years Red"
    },
    mobileMenu: false
}

// Reducer

const game = (current = currentDefault, dispatch) => {
    switch (dispatch.type) {
        case GAME_ADD_HASH:
            current.hashes.push(dispatch.hash);
            return { ...current };
        case GAME_ADD_MATCH:
            current.matches.push(dispatch.match);
            return { ...current };
        case GAME_REMOVE_MATCH:
            current.matches.splice(dispatch.key, 1);
            return { ...current };
        case MOBILE_MENU:
            return {
                ...current,
                mobileMenu: !current.mobileMenu
            };
        default: return current;
    }
};

// Actions

export const addHash = hash => ({
    type: GAME_ADD_HASH,
    hash: hash
});

export const addMatch = match => ({
    type: GAME_ADD_MATCH,
    match: match
});

export const removeMatch = key => ({
    type: GAME_REMOVE_MATCH,
    key: key
});

export const toggleMobileMenu = () => ({
    type: MOBILE_MENU
});

export default game;