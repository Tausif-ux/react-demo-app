import React from "react";
import classes from "./Char.module.css";

const Char = props => {
    let random = Math.random();
    
    if(random < 0.7) {
        throw new Error('What Happened!');
    }

  return (
    <div className={classes.Char}>
      <p onClick={() => props.onClicked(props.index)}>{props.inputChar}</p>
    </div>
  );
};

export default Char;
