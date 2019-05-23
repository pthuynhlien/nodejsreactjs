import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectFood} from '../actions/index';
import { bindActionCreators } from 'redux';

class FoodList extends Component {
    createFoodListItems(){
        let listItems = this.props.foods.map(
            (eachFood) => {
                return (
                    <li key = {eachFood.id} onClick = {() => {this.props.selectFood(eachFood)}}>
                        Food's name: {eachFood.name}</li>);
            }
        );

        return listItems;
    }
    render() {
        return (
            <ul>
                <li>{this.createFoodListItems()}</li>
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        foods: state.foods
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({selectFood : selectFood}, dispatch);
}

let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);
export default FoodContainer;
