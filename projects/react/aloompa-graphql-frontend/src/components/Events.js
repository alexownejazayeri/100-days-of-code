import React, { useState, useEffect, useCallback } from "react";

import EventsList from "./EventsList";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [enteredSearch, setEnteredSearch] = useState("");

  const fetchEventsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://efaw8i6jre.execute-api.us-east-1.amazonaws.com/dev/graphql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `query { 
                    allEvents { 
                        id 
                        name 
                        image 
                        description 
                        startsAt 
                        endsAt
                      } 
                  }`,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("You got 99 problems, but an event ain't one.");
      }

      const data = await response.json();
      setEvents(data["data"]["allEvents"]);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEventsHandler();
  }, [fetchEventsHandler]);

  let content = <p>Next time you type, the funk shall be within you...</p>;

  if (events.length > 0) {
    content = <EventsList events={events} search={enteredSearch} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Don't sweat the technique...</p>;
  }

  const eventSearchChangeHandler = (e) => {
    setEnteredSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <section>
        <input
          id="event-search"
          placeholder="Search events..."
          type="text"
          onChange={eventSearchChangeHandler}
        ></input>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default Events;
