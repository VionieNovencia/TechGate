import React, { useState, useMemo } from 'react';

import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

import styles from './styles';
import SearchInput from './SearchField';
import { Jobs } from '../../data/Job';

const HomePage = () => {
  const [job, setJob] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [startWage, setStartWage] = useState<number>(0);
  const [endWage, setEndWage] = useState<number>(0);

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
      <div className={styles.contentContainer}>
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
        <div className={styles.content}>
          {filteredJobs.map((jobItem, index) => (
            <Card
              key={index} // Unique key for each job
              title={jobItem.title}
              icon={jobItem.icon}
              company={jobItem.company}
              location={jobItem.location}
              salaryStart={jobItem.startWage}
              salaryEnd={jobItem.endWage}
              posted={jobItem.posted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
