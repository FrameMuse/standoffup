// Defines

const POPUP_DEPLOY = "POPUP/DEPLOY";
const POPUP_TOGGLE = "POPUP/TOGGLE";

// Reducer

const popup = (current = { name: "sell", props: { events: [] }, show: true }, dispatch) => {
    switch (dispatch.type) {
        case POPUP_DEPLOY:
            return {
                ...current,
                name: dispatch.name,
                props: dispatch.props,
                show: true
            };
        case POPUP_TOGGLE:
            return {
                ...current,
                show: !current.show
            };
    
        default: return current;
    }
};

// Actions

export const deployPopup = (name, props) => ({
    type: POPUP_DEPLOY,
    name: name,
    props: props
});

export const togglePopup = () => ({
    type: POPUP_TOGGLE
});

export default popup;