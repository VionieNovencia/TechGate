import React, { useState, useMemo, useEffect } from 'react';

import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

import styles from './styles';
import SearchInput from './SearchField';
import { Jobs } from '../../data/Job';
import JobDetail from '../../components/JobDetail';

const HomePage = () => {
  const [job, setJob] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [startWage, setStartWage] = useState<number>(0);
  const [endWage, setEndWage] = useState<number>(0);
  const [selectedJob, setSelectedJob] = useState<string>('');

  const filteredJobs = useMemo(() => {
    return Object.values(Jobs).filter((jobItem) => {
      const matchesJob = job === '' || jobItem.title.toLowerCase().includes(job.toLowerCase());
      const matchesLocation = location === '' || jobItem.location.toLowerCase().includes(location.toLowerCase());
      const matchesStartWage = startWage === 0 || jobItem.startWage >= startWage;
      const matchesEndWage = endWage === 0 || jobItem.endWage <= endWage;
      return matchesJob && matchesLocation && matchesStartWage && matchesEndWage;
    });
  }, [job, location, startWage, endWage]);

  return (
    <div className={styles.container}>
      <Navbar />
      <SearchInput
            job={job}
            setJob={setJob}
            location={location}
            setLocation={setLocation}
            startWage={startWage}
            setStartWage={setStartWage}
            endWage={endWage}
            setEndWage={setEndWage}
          />
      <div className={selectedJob.length > 0 ? styles.contentWithDetailContainer : styles.contentContainer}>
        <div className={selectedJob.length > 0 ? styles.contentWithDetail : styles.content}>
          {filteredJobs.map((jobItem, index) => (
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
            />
          ))}
        </div>  
        {selectedJob.length > 0 && (
          <JobDetail jobId={selectedJob} clearSelectedJob={() => setSelectedJob('')}/>
        )}
      </div>
    </div>
  );
};

export default HomePage;
