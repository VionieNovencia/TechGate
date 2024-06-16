import React from "react";

import styles from "./styles";
import Typography from "../../components/Typography";
import Navbar from "../../components/Navbar";
import { Notifications } from "../../data/Notification";
import Card from "./Card";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NotificationPage = () => {
  const {notification, setNotification} = useAuth();
  const navigate = useNavigate()

  const handleClick = ({id}: {id:string}) => {
    setNotification({
      ...notification,
      [id]: true,
    });
    navigate(`/notification/${id}`);
  };
  
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentContainer}>
        <Typography variant="title1">
          Notification
        </Typography>
        <div className={styles.content}>
          {Object.values(Notifications).map((notification) => (
            <Card notificationItem={notification} onClick={() => handleClick({id: notification.id})}/>
          ))}
        </div>
      </div>
      
    </div>
  )
};

export default NotificationPage;
