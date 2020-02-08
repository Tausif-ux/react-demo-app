import React from 'react';
import classes from '../Char.Component/Char.module.css'

const Validation = (props) => {

    const validText = props.inputText.length <= 5 ? <p>Text is too small</p> : null;

    return ( 
        <div className={classes.Char}>
            {validText}
        </div>
        
     );
}
 
export default Validation;