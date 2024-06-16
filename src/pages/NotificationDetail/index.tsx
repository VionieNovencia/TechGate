import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import backIcon from '../../assets/left-arrow.png';

import Typography from "../../components/Typography";
import BaseButton from "../../components/BaseButton";

import styles from './styles';
import { Notifications } from "../../data/Notification";
import Navbar from "../../components/Navbar";

const NotificationDetailPage = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();

  let notification = null;
  if(id) {
    notification = Notifications[id];
  }
  
  return (
    <div className={styles.container}>
      <Navbar />
      {!!notification && (
        <div className={styles.contentContainer}>
          <div className={styles.flexRow}>
            <BaseButton onClick={() => navigate('/notification')}>
              <img src={backIcon} alt="" width={30} height={30} />
            </BaseButton>
            <Typography variant="title1">
              Notification Detail
            </Typography>
          </div>
          <div className={styles.title}>
            <Typography variant="title2">
              {notification.title}
            </Typography>
            <Typography>
              {notification.desc}
            </Typography>
          </div>
          <div className={styles.divider} />
        </div>
      )} 
    </div>
  )
};

export default NotificationDetailPage;