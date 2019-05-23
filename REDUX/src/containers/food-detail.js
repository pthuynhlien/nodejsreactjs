import React, { Component } from 'react';
import {connect} from 'react-redux';

class FoodDetail extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.activeFood.name}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        activeFood: state.activeFood
    }
}

let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);
export default FoodDetailContainer;