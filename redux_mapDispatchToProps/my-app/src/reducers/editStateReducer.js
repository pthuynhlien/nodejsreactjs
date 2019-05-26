const editStateInitialState = true;
const editStateReducer = (state = editStateInitialState, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return !state
        default:
            return state
    }
}

export default editStateReducer;