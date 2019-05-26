const numInitialState = ["man hinh", "chuot", "ban phim"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.newitem]

        case "DELETE":
            return [state.filter((value,i) => i !== action.index)]

        default:
            return state
    }
}

export default numReducer;