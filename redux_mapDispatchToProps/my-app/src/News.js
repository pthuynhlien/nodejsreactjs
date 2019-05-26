import React, { Component } from 'react';
import {connect} from 'react-redux';

class News extends Component {
    render() {
        return (
            <div>
                <h2>Day la component News</h2>
                <button onClick = {() => this.props.dispatch1()}>Click me</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      dulieu: state.num
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      dispatch1: () => {
        dispatch({type:"CHANGE_EDIT_STATUS"})
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(News);