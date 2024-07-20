import React from 'react';

import Typography from '../../../components/Typography';
import BaseButton from '../../../components/BaseButton';

import styles from './styles';

interface Event {
  id?: string,
  title: string;
  date: string;
  time: string;
  company: string;
  isDone: boolean;
  status: string;
  timeLimit?: number;
}

const TestEntrance = ({
  event,
  onClick,
}: {
  event: Event,
  onClick: () => void,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Typography variant="headline">
          {event.title}
        </Typography>
        <div className={styles.text}>
          <Typography>
            {`Time limit: ${event.timeLimit} hour`}
          </Typography>
          <Typography>
            Due date: {event.date}, {event.time}
          </Typography>
        </div>
        <BaseButton className={styles.button} onClick={onClick}>
          <Typography color='white'>
            Start
          </Typography>
        </BaseButton>
      </div>
    </div>
  )
};

export default TestEntrance;