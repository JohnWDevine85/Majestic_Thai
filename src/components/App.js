import React, { Component } from 'react';
import '../styles/App.css';
// Import BaseLayout, Appetizers, Entrees, Desserts
import BaseLayout from './Layout'
import Appetizers from './Appetizers'
import Entrees from './Entrees'
import Desserts from './Desserts'


class App extends Component {
// Set initial state for appetizers, entrees, and desserts.
// All should be set to empty arrays.
constructor(props){
  super(props)
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
}
// Lifecycle method
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entres, and desserts.
// Set these to state.
// YOUR CODE HERE>
componentDidMount(){
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
  .then(results => results.json())
  .then(responseData => {
    console.log(responseData)
    this.setState({
      appetizers: responseData[0].Appetizers,
      entrees: responseData[0].Entrees,
      desserts: responseData[0].Desserts
    })
    console.log(this.state)
  })
  .catch(function(error){
    console.log(error)
  })
}
  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
       <BaseLayout >
        <Appetizers items={this.state.appetizers}/>
        <Entrees items={this.state.entrees}/>
        <Desserts items={this.state.desserts}/>
      </BaseLayout>
        // BaseLayout and nested components
    );
  }
}
export default App;
