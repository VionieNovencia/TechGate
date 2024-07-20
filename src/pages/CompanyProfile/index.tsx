import React, { useState } from "react";

import styles from './styles';
import { CompanyList } from "../../data/Company";
import Typography from "../../components/Typography";
import { useParams } from "react-router-dom";
import BaseButton from "../../components/BaseButton";
import About from "./About";
import Jobs from "./Jobs";

const CompanyProfilePage = () => {
  const [currentTab, setCurrentTab] = useState<string>('About');
  const { name } = useParams<{name: string}>();

  if(!name) {
    return (
      <div>
        not found
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <img src={CompanyList[name].cover} alt="" width={920} height={240} className={styles.coverImg}/>
        <div className={styles.content}>
          <div className={styles.flexRow}>
            <img src={CompanyList[name].icon} alt="" />
            <div className={styles.text}>
              <Typography variant="headline">
                {CompanyList[name].name}
              </Typography>
              <Typography variant="title1">
                {CompanyList[name].desc}
              </Typography>
              <Typography variant="title1">
                {CompanyList[name].location}
              </Typography>
            </div>
          </div>
          <div className={styles.tabContainer}>
            <BaseButton 
              onClick={() => {setCurrentTab('About')}} 
              className={currentTab === 'About' ? styles.activeTab : styles.tab}
            >
              <Typography>
                About
              </Typography>
            </BaseButton>
            <BaseButton 
              onClick={() => {setCurrentTab('Jobs')}} 
              className={currentTab === 'Jobs' ? styles.activeTab : styles.tab}
            >
              <Typography>
                Jobs
              </Typography>
            </BaseButton>
          </div>
          <div>
            {currentTab === 'About' && (
              <About company={CompanyList[name]} />
            )}
            {currentTab === 'Jobs' && (
              <Jobs company={name} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default CompanyProfilePage;