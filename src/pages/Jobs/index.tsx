import React, { useMemo, useState } from "react";
import styles from "./styles";
import Navbar from "../../components/Navbar";
import Typography from "../../components/Typography";
import BaseButton from "../../components/BaseButton";
import { JobList } from "../../data/Job";
import Card from "../../components/JobCard";
import JobDetail from "../../components/JobDetail";
import { useAuth } from "../../context/AuthContext";

const JobsPage = () => {
  const [currentTab, setCurrentTab] = useState<string>('Saved');
  const [selectedJob, setSelectedJob] = useState<string>('');

  const {savedJob, appliedJob} = useAuth();

  const savedJobList = useMemo(() => {
    return savedJob
      .filter(key => key in JobList)  // Ensure the keys in b are in a
      .map(key => JobList[key]);      // Map the keys to their corresponding values in a
  }, [savedJob]);

  const appliedJobList = useMemo(() => {
    return appliedJob
      .filter(key => key in JobList)  // Ensure the keys in b are in a
      .map(key => JobList[key]);      // Map the keys to their corresponding values in a
  }, [appliedJob]);

  return (
    <div className={styles.container}>
      <div className={selectedJob ? styles.contentWithDetailContainer : styles.contentContainer}>
        <Typography variant="headline" textAlign="center">
          Jobs
        </Typography>
        <div className={styles.tabContainer}>
          <BaseButton
            onClick={() => {setCurrentTab('Saved')}} 
            className={currentTab === 'Saved' ? styles.activeTab : styles.tab}
          >
            <Typography variant="title1"> 
              Saved
            </Typography>
          </BaseButton>
          <BaseButton 
            onClick={() => {setCurrentTab('Applied')}} 
            className={currentTab === 'Applied' ? styles.activeTab : styles.tab}
          >
            <Typography variant="title1">
              Applied
            </Typography>
          </BaseButton>
        </div>
        <div className={selectedJob ? styles.outerContainerWithDetail : styles.outerContainer}>
          <div className={selectedJob ? styles.contentWithDetail : styles.content}>
            {currentTab === 'Saved' && (
              savedJobList.map((jobItem, index) => (
                <Card
                  id={jobItem.id}
                  key={index}
                  title={jobItem.title}
                  icon={jobItem.icon}
                  company={jobItem.company}
                  location={jobItem.location}
                  salaryStart={jobItem.startWage}
                  salaryEnd={jobItem.endWage}
                  posted={jobItem.posted}
                  onClick={() => setSelectedJob((jobItem.id))}
                  selectedJob={selectedJob}
                  link={jobItem.link}
                  applyButton={true}
                />
              ))
            )}
            {currentTab === 'Applied' && (
              appliedJobList.map((jobItem, index) => (
                <Card
                  id={jobItem.id}
                  key={index}
                  title={jobItem.title}
                  icon={jobItem.icon}
                  company={jobItem.company}
                  location={jobItem.location}
                  salaryStart={jobItem.startWage}
                  salaryEnd={jobItem.endWage}
                  posted={jobItem.posted}
                  onClick={() => setSelectedJob((jobItem.id))}
                  selectedJob={selectedJob}
                  link={jobItem.link}
                />
              ))
            )}
          </div>
          <div>
            {selectedJob.length > 0 && (
              <JobDetail jobId={selectedJob} clearSelectedJob={() => setSelectedJob('')}/>
            )}
          </div>
        
        </div>
        
        
        
      </div>
    </div>
  )
};

export default JobsPage;