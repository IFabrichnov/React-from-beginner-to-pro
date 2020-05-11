import React from "react";
import classes from './Backdrop.module.css';

//Компонент темного фона, который будет блокировать экран, при открытом меню
const Backdrop = (props) => {
  return (
    <div className={classes.Backdrop}
         onClick={props.onClick}
    />
  )
};

export default Backdrop;