import { combineReducers } from "redux";
import inventory from "./inventory";
import chat from "./chat";
import user from "./user";
import game from "./game";
import lang from "./lang";
import popup from "./popup";

export default combineReducers({
    inventory: inventory,
    chat: chat,
    user: user,
    game: game,
    lang: lang,
    popup: popup,
    devices: (devices = { desktop: true, tablet: false, mobile: false }, dispatch) => {
        switch (dispatch.type) {
            case "DEVICES/UPDATE": return dispatch.devices;
            default: return devices
        }
    }
});