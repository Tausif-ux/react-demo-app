import React, {useContext} from 'react';
import classes from './Person.module.css';
import AuthContext from '../../../auth-context/AuthContext';

const Person = (props) => {

    const context = useContext(AuthContext);

    return (
        <div className={classes.Person}>
            <h2 onClick = { () => context.handleDelete(props.index) }>{props.person.name}</h2>
        </div>
    );
}

 
export default Person;