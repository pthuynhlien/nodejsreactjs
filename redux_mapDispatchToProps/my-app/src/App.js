import logo from './logo.svg';
import './App.css';
// import News from './News';
import {connect} from 'react-redux';

import React, { Component } from 'react';
import News from './News';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {this.props.dulieu}
      </header>
      <News></News>
      {/* <button onClick = {() => this.props.dispatch1()}>Click me</button> */}
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch1: () => {
//       dispatch({type:"CHANGE_EDIT_STATUS"})
//     }
//   }
// }
export default connect(mapStateToProps)(App);
