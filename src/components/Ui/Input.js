import React from "react";
import classes from "./Input.module.css";
function Input(props) {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input id={props.input.id} {...props.input} />
    </div>
  );
}
//spread for rest of key value pairs

export default Input;
