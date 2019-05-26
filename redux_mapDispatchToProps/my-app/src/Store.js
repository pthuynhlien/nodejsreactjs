import numReducer from './reducers/numReducer';
import editStateReducer from './reducers/editStateReducer';

var redux = require('redux');
// var oldState = {
//     num : ["man hinh", "chuot", "ban phim"],
//     editStatus : true
// }

// var reducer1 = (state = oldState, action) => {
//     switch (action.type) {
//     case "CHANGE_EDIT_STATUS":
//         return {...state, editStatus : !state.editStatus}

//     case "ADD_NEW":
//         return {...state, num:[...state.num, action.newitem]}

//     case "DELETE":
//     return {...state, num:state.num.filter((value,i) => i !== action.index)}
    
//     default:
//         break;
//     }
//     return state
// }

var allReducer = redux.combineReducers({
    num : numReducer,
    editStatus : editStateReducer
})

var store1 = redux.createStore(allReducer);
//Dung ham subcribe thay cho console.log
store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
})
// store1.dispatch({type:"CHANGE_EDIT_STATUS"})

// store1.dispatch({
//     type:"ADD_NEW",
//     newitem: "Tai nghe"
// })

// store1.dispatch({
//     type:"DELETE",
//     index: 0
// })

export default store1;