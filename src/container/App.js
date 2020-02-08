import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import classes from './App.module.css';
import AuthContext from '../auth-context/AuthContext';


export class App extends Component {

  constructor(props) {

    super(props);
    console.log('[App.js] constructor()');

    this.state = {
      showComponent: false,
      persons: [
        {id: 'afj', name: 'John', age: 30},
        {id: 'bcg', name: 'Padrick', age: 28},
        {id: 'cdh', name: 'David', age: 26}
      ]
    }
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.js] getDerivedStateFromProps()');
    return null;
  }


  handleClick = () => {
    this.setState({showComponent: !this.state.showComponent});
  }
  

  handleDelete = (index) => {
    const newPersons = [ ...this.state.persons ];
    newPersons.splice(index, 1);
    this.setState({persons: newPersons});
  }


  render() {
    console.log('[App.js] render()');
    return (
      <div className={classes.App}>
        <button onClick={this.handleClick}>Show Component</button>

        <AuthContext.Provider value={ {handleDelete: this.handleDelete} }>
          {this.state.showComponent ? <Persons personsList={this.state.persons} /> : null}
        </AuthContext.Provider>
      </div>
    );
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('[App.js] componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUpdate()');
  }
}
