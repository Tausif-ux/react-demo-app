import React, { Component } from 'react';
import Person from './Person/Person'

// const Persons = props => props.personsList.map(p => <Person person={p} />);

class Persons extends Component {
    
    render() {
        console.log('[Persons.js] render()');

        return this.props.personsList.map((p, i) => <Person key={i} person={p} index={i} 
                                                        deleted = {this.props.onDeleted}/>);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate()');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[Persons.js] componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUpdate()');
    }
}
 
export default Persons;

