import React from "react";

import styles from "./styles";
import Typography from "../../../components/Typography";

interface Event {
  title: string;
  date: string;
  time: string;
  company: string;
  isDone: boolean;
  status: string
}
const Card = ({
  event
}:{
  event: Event
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.flexRow}> 
        <Typography variant="title2">
          {event.title}
        </Typography>
        <Typography>
          {`Due date ${event.date}`}
        </Typography>
      </div>
      <div className={styles.flexRow}> 
        <Typography variant="title3">
          {event.company}
        </Typography>
        <Typography>
          {event.time}
        </Typography>
      </div>
      <Typography color={event.isDone ? '#FF7900' : '#007BFF'}>
        {event.status}
      </Typography>
    </div>
  )
};

export default Card;