import { combineReducers } from "redux";
import inventory from "./inventory";
import chat from "./chat";

export default combineReducers({
    inventory: inventory,
    chat: chat,
});