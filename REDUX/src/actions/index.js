import {SELECT_FOOD} from './actionTypes';
export const selectFood = (food) => {
    console.log('You clicked');
    return {
        type : SELECT_FOOD,
        payload: food
    }
}