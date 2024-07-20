import React, { useState } from "react";
import styles from "./styles";
import Typography from "../../components/Typography";
import BaseButton from "../../components/BaseButton";
import Card from "./Card";
import { Events } from "../../data/Event";

const EventPage = () => {
  const [currentTab, setCurrentTab] = useState<string>('Test');
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Typography variant="headline" textAlign="center">
          Events
        </Typography>
        <div className={styles.tabContainer}>
          <BaseButton
            onClick={() => {setCurrentTab('Test')}} 
            className={currentTab === 'Test' ? styles.activeTab : styles.tab}
          >
            <Typography variant="title1"> 
              Tests
            </Typography>
          </BaseButton>
          <BaseButton 
            onClick={() => {setCurrentTab('Interview')}} 
            className={currentTab === 'Interview' ? styles.activeTab : styles.tab}
          >
            <Typography variant="title1">
              Interviews
            </Typography>
          </BaseButton>
        </div>
        {currentTab === 'Test' && (
          Events['test'].map((event) => (
            <Card event={event} type={'test'} />
          ))
        )}
        {currentTab === 'Interview' && (
          Events['interview'].map((event) => (
            <Card event={event} type={'interview'} />
          ))
        )}
      </div>
    </div>
  )
};

export default EventPage;