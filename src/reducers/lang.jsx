// Imports

import ru from "../langs/ru.json";
import en from "../langs/en.json";

// Defines

const LANG_SWITCH = "LANG/SWITCH";
const langs = { RU: ru, EN: en };

// Reducer

const lang = (current = { lang: "RU", list: langs.RU }, dispatch) => {
    switch (dispatch.type) {
        case LANG_SWITCH:
            return {
                list: langs[dispatch.lang],
                lang: dispatch.lang
            };
    
        default: return {
            ...current,
            list: langs[current.lang]
        };
    }
};

// Actions

export const switchLang = lang => ({
    type: LANG_SWITCH,
    lang: lang
});

export default lang;