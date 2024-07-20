import React from "react";

import styles from "./styles";
import Typography from "../../../components/Typography";
import BaseButton from "../../../components/BaseButton";
import { useNavigate } from "react-router-dom";

interface Event {
  id?: string,
  title: string;
  date: string;
  time: string;
  company: string;
  isDone: boolean;
  status: string
}
const Card = ({
  event,
  type,
}:{
  event: Event
  type: string
}) => {
  const navigate = useNavigate();
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
      <BaseButton onClick={() => {navigate(type === 'test' ? `/test/${event.id}` : '/interview')}}>
        <Typography color={event.isDone ? '#FF7900' : '#007BFF'}>
          {event.status}
        </Typography>
      </BaseButton>
      
    </div>
  )
};

export default Card;