import React from "react";

import appliedActiveIcon from '../../../assets/message-active.png';
import appliedInactiveIcon from '../../../assets/message-inactive.png';
import interviewActiveIcon from '../../../assets/interview-active.png';
import interviewInactiveIcon from '../../../assets/interview-inactive.png';
import testActiveIcon from '../../../assets/test-active.png';
import testInactiveIcon from '../../../assets/test-inactive.png';
import resultActiveIcon from '../../../assets/result-active.png';
import resultInactiveIcon from '../../../assets/result-inactive.png';

import Typography from "../../../components/Typography";

import styles from './styles';
import { useAuth } from "../../../context/AuthContext";

type NotificationTypes = 'APPLIED' | 'TEST' | 'INTERVIEW' | 'RESULT';

type NotificationsPropTypes = {
  id: string;
  title: string;
  desc: string;
  date: string;
  type: NotificationTypes;
}

const Card = ({
  notificationItem,
  onClick,
}:{
  notificationItem: NotificationsPropTypes
  onClick: () => void,
}) => {
  const { notification } = useAuth();

  const getNotificationIcon = () => {
    if (notificationItem.type === 'APPLIED' && !notification[notificationItem.id]) {
      return appliedActiveIcon;
    } else if (notificationItem.type === 'APPLIED' && notification[notificationItem.id]){
      return appliedInactiveIcon;
    } else if (notificationItem.type === 'TEST' && !notification[notificationItem.id]) {
      return testActiveIcon
    } else if (notificationItem.type === 'TEST' && notification[notificationItem.id]) {
      return testInactiveIcon
    } else if (notificationItem.type === 'INTERVIEW' && !notification[notificationItem.id]) {
      return interviewActiveIcon
    } else if (notificationItem.type === 'INTERVIEW' && notification[notificationItem.id]) {
      return interviewInactiveIcon
    } else if (notificationItem.type === 'RESULT' && !notification[notificationItem.id]) {
      return resultActiveIcon
    } else {
      return resultInactiveIcon
    }
  }
  
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={getNotificationIcon()} alt="" width={60} height={60}/>
      <div className={styles.content}>
        <Typography variant="title2">
          {notificationItem.title}
        </Typography>
        <Typography>
          {notificationItem.date}
        </Typography>
        <Typography className={styles.ellipsis}>
          {notificationItem.desc}
        </Typography>
      </div>
    </div>
  )
};

export default Card;
