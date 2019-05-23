import React from 'react';
import './App.css';
import FoodContainer from '../containers/food-list';
import FoodDetailContainer from '../containers/food-detail';

function App() {
  return (
    <div className="App">
      <h2>Welcom to React with Redux project</h2>
      <p>
        This is a tutorial React app with Redux
      </p>
      <h2>List of foods: </h2>
      <FoodContainer></FoodContainer>
      <hr></hr>
      <h2>Food detail: </h2>
      <FoodDetailContainer></FoodDetailContainer>
    </div>
  );
}

export default App;
