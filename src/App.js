import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import RecipesList from './components/recipesList';
import axios from 'axios';

export const { Producer, Consumer } = React.createContext();

export class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      recipes:[],
      searchText: '',
    };
  }

  YOUR_APP_ID = `3f2917e7`;
  YOUR_APP_KEY = `572e5e5932933d2f7b3655e1c4f0aac6`; 
  proxy = `https://cors-anywhere.herokuapp.com/`;

  handleSubmit = (e) => {
    e.preventDefault();
    alert('submit button clicked');
    fetch(`https://api.edamam.com/search?q=${this.state.searchText}&app_id=${this.YOUR_APP_ID}&app_key=${this.YOUR_APP_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({ recipes: json.hits }));
  
  };

  handleChange = (searchQuery) => {
    this.setState({searchText: searchQuery});
  };


  render() {
    return ( 
      <React.Fragment>
        <Producer value = {{onChange: this.handleChange, 
          onSubmit: this.handleSubmit,
          query: this.state.searchText }}>
          <NavBar />
        </Producer>
        
        <main className="container">
          <RecipesList
            recipes = {this.state.recipes}
          />
            
        </main>
      </React.Fragment>
     );
  }
}
 
// export {App, Consumer};