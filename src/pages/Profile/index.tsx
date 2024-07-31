import React, { useState } from "react";

import profileIcon from '../../assets/profile-picture-white.png';
import pencilIcon from '../../assets/pencil.png';
import pencilGreyIcon from '../../assets/pencil-grey.png';
import plusButton from '../../assets/plus.png';

import styles from './styles';
import Typography from "../../components/Typography";
import BaseButton from "../../components/BaseButton";
import Card from "./Card";
import { education, experience, sertification } from "../../data/Profile";
import ChangeProfileModal from "./ChangeProfileModal";

const ProfilePage = () => {
  const [CVFileList, setCVFileList] = useState<File[]>([]);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('Michelle');
  const [lastName, setLastName] = useState<string>('Lee');
  const [location, setLocation] = useState<string>('Bandung, Jawa Barat');

  const handleCVFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCVFileList((prevFileList) => [...prevFileList, file]);
    }
  };

  const handleSubmit = ({
    newFirstName,
    newLastName,
    newLocation,
  } : {
    newFirstName: string,
    newLastName: string,
    newLocation: string,
  }) => {
    setFirstName(newFirstName);
    setLastName(newLastName);
    setLocation(newLocation);
  };

  return(
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.mainProfileSection}>
          <div className={styles.content}>
            <img src={profileIcon} alt="" width={160} height={160} />
            <div className={styles.text}>
              <Typography variant="headline" color="white">
                {`${firstName} ${lastName}`}
              </Typography>
              <Typography variant="title1" color="white">
                {location}
              </Typography>
            </div>
          </div>
          <BaseButton onClick={() => setIsEditProfileModalOpen(true)}>
            <img src={pencilIcon} alt="" width={25} height={25} />
          </BaseButton>
        </div>
        <div className={styles.buttonContainer}>
          {CVFileList.length === 0 && (
            <input
              type="file"
              id="fileInput"
              onChange={handleCVFileChange}
              accept=".pdf,.doc,.docx"
              className={styles.input}
            />
          )}
          <BaseButton onClick={() => {}}>
            <Typography color="#003A79" className={styles.button}>
              Add profile section
            </Typography>
          </BaseButton>
        </div>
        {CVFileList.length > 0 && (
          <React.Fragment>
            <div className={styles.profileSection}>
              <div className={styles.flexRow}>
                <Typography variant="title1">
                  About
                </Typography>
                <BaseButton onClick={() => {}}>
                  <img src={pencilGreyIcon} alt="" width={25} height={25} />
                </BaseButton>
              </div>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
            <div className={styles.profileSection}>
              <div className={styles.flexRow}>
                <Typography variant="title1">
                  Experience
                </Typography>
                <div className={styles.buttonContainer}>
                  <BaseButton onClick={() => {}}>
                    <img src={plusButton} alt="" width={25} height={25} />
                  </BaseButton>
                  <BaseButton onClick={() => {}}>
                    <img src={pencilGreyIcon} alt="" width={25} height={25} />
                  </BaseButton>
                </div>
              </div>
              {experience.map((e,index)=> {
                const lastItem = index === experience.length -1 ;
                return (
                  <Card
                    title={e.title}
                    desc={e.desc}
                    company={e.company}
                    jobType={e.jobType}
                    location={e.location}
                    date={e.date}
                    logo=""
                    isLastItem={lastItem}
                  />
                )}
              )}
            </div>
            <div className={styles.profileSection}>
              <div className={styles.flexRow}>
                <Typography variant="title1">
                  Education
                </Typography>
                <div className={styles.buttonContainer}>
                  <BaseButton onClick={() => {}}>
                    <img src={plusButton} alt="" width={25} height={25} />
                  </BaseButton>
                  <BaseButton onClick={() => {}}>
                    <img src={pencilGreyIcon} alt="" width={25} height={25} />
                  </BaseButton>
                </div>
              </div>
              {education.map((e,index)=> {
                const lastItem = index === education.length -1 ;
                return (
                  <Card
                    title={e.title}
                    desc={e.desc}
                    date={e.date}
                    logo=""
                    isLastItem={lastItem}
                  />
                )}
              )}
            </div>
            <div className={styles.profileSection}>
              <div className={styles.flexRow}>
                <Typography variant="title1">
                  Licenses & Certifications
                </Typography>
                <div className={styles.buttonContainer}>
                  <BaseButton onClick={() => {}}>
                    <img src={plusButton} alt="" width={25} height={25} />
                  </BaseButton>
                  <BaseButton onClick={() => {}}>
                    <img src={pencilGreyIcon} alt="" width={25} height={25} />
                  </BaseButton>
                </div>
              </div>
              {sertification.map((e,index)=> {
                const lastItem = index === sertification.length -1 ;
                return (
                  <Card
                    title={e.title}
                    company={e.company}
                    date={e.date}
                    logo=""
                    isLastItem={lastItem}
                    isSertification
                  />
                )}
              )}
            </div>
            <div className={styles.profileSection}>
              <div className={styles.flexRow}>
                <Typography variant="title1">
                  CV
                </Typography>
                <div className={styles.buttonContainer}>
                  <BaseButton onClick={() => {}}>
                    <img src={plusButton} alt="" width={25} height={25} />
                  </BaseButton>
                  <BaseButton onClick={() => {}}>
                    <img src={pencilGreyIcon} alt="" width={25} height={25} />
                  </BaseButton>
                </div>
              </div>
              <div className={styles.cvItem}>
                {CVFileList.map((file) => (
                  <Typography>
                    {file.name}
                  </Typography>
                ))}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <ChangeProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        onSubmit={handleSubmit}
        initialFirstName={firstName}
        initialLastname={lastName}
        initialLocation={location}
      />
    </div>
  )
}

export default ProfilePage;