import React from "react";

import Event from "./Event";
import classes from "./EventsList.module.css";

const EventsList = (props) => {
  const search = props.search.toLowerCase().split("");

  // Return a filtered array of events feat. names with characters that match search
  const eventMatches = props.events.filter((el) => {
    let boolCount = 0;
    const strArr = el["name"].toLowerCase().split("");
    strArr.map((el) => (boolCount += search.includes(el)));
    if (boolCount >= search.length) {
      return true;
    }
  });

  let content = props.events.map((event) => {
    return (
      <Event
        key={event["id"]}
        image={event["image"]}
        name={event["name"]}
        description={event["description"]}
        start={event["startsAt"]}
        end={event["endsAt"]}
      />
    );
  });

  if (search.length > 0) {
    content = eventMatches.map((event) => {
      return (
      <Event
        key={event['id']}
        image={event['image']}
        name={event['name']}
        description={event['description']}
        start={event['startsAt']}
        end={event['endsAt']}
      />
    );
    })
  }

  if (search.length > 0 && eventMatches.length === 0) {
    return <p>No matches found!</p>
  }

  return <ul className={classes["events-list"]}>{content}</ul>;
};

export default EventsList;
