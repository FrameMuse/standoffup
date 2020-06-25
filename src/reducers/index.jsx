import { combineReducers } from "redux";
import inventory from "./inventory";
import chat from "./chat";
import user from "./user";
import game from "./game";
import lang from "./lang";

export default combineReducers({
    inventory: inventory,
    chat: chat,
    user: user,
    game: game,
    lang: lang,
});