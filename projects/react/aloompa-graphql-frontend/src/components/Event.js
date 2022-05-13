import React from "react";

import classes from "./Event.module.css";

const Event = (props) => {
    return (
    <li className={classes.event}>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      <p>Start Time: {`${new Date(props.start * 1000)}`}</p>
      <p>End Time: {`${new Date(props.end * 1000)}`}</p>
    </li>
  );
};

export default Event;
