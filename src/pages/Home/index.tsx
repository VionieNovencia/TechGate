import React from 'react';

import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

import CompanyIcon from '../../assets/traveloka_logo.jpeg';

import styles from './styles';
import SearchInput from './SearchField';

const HomePage = () => {

  return (
    <div className={styles.container}> 
      <Navbar />
      <div className={styles.contentContainer}>
        <SearchInput />
        <div className={styles.content}>
          <Card
            title='Frontend Developer'
            icon={CompanyIcon}
            company='Traveloka'
            location='Jakarta'
            salaryStart={5000000}
            salaryEnd={7000000}
            posted={5}
          />
          <Card
            title='Frontend Developer'
            icon={CompanyIcon}
            company='Traveloka'
            location='Jakarta'
            salaryStart={5000000}
            salaryEnd={7000000}
            posted={5}
          />
          <Card
            title='Frontend Developer'
            icon={CompanyIcon}
            company='Traveloka'
            location='Jakarta'
            salaryStart={5000000}
            salaryEnd={7000000}
            posted={5}
          />
          <Card
            title='Frontend Developer'
            icon={CompanyIcon}
            company='Traveloka'
            location='Jakarta'
            salaryStart={5000000}
            salaryEnd={7000000}
            posted={5}
          />

        </div>
      </div>
    </div>
  )
};

export default HomePage;