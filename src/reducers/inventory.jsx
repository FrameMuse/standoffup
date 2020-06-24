// Defines

const INVENTORY_TOGGLE_ITEM = "INVENTORY/TOGGLE/ITEM";
const INVENTORY_TOGGLE_ALL = "INVENTORY/TOGGLE/ALL";

const weapons = Array(4).fill(0).map(_ => ({ picked: false }));

// Reducer

const inventory = (current = { weapons: weapons, allPicked: false }, dispatch) => {
    switch (dispatch.type) {
        case INVENTORY_TOGGLE_ITEM:
            const picked = current.weapons[dispatch.index]["picked"];
            current.weapons[dispatch.index]["picked"] = !picked;
            return { ...current };
        case INVENTORY_TOGGLE_ALL:
            return { 
                ...current,
                allPicked: !current.allPicked
            };
        default: return current;
    }
}

// Actions

export const toggleItem = index => ({
    type: INVENTORY_TOGGLE_ITEM,
    index: index
});

export const toggleAll = _ => ({
    type: INVENTORY_TOGGLE_ALL
});

export default inventory;