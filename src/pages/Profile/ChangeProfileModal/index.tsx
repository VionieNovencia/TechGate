import React, { useState } from "react";

import Modal from "../../../components/Modal";

import closeIcon from '../../../assets/close-icon.png';
import profileIcon from '../../../assets/profile-picture.png';

import styles from "./styles";
import BaseButton from "../../../components/BaseButton";
import Input from "../../../components/Input";
import Typography from "../../../components/Typography";

const ChangeProfileModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialFirstName,
  initialLastname,
  initialLocation,
} : {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: ({
    newFirstName,
    newLastName,
    newLocation,
  } : {
    newFirstName: string,
    newLastName: string,
    newLocation: string,
  }) => void,
  initialFirstName: string,
  initialLastname: string,
  initialLocation: string,
}) => {
  const [firstName, setFirstName] = useState<string>(initialFirstName);
  const [lastName, setLastName] = useState<string>(initialLastname);
  const [location, setLocation] = useState<string>(initialLocation);

  const handleSubmit = () => {
    onSubmit({
      newFirstName: firstName,
      newLastName: lastName,
      newLocation: location,
    })
    onClose()
  }

  return (
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      className={styles.container}
    >
      <div className={styles.closeIcon}>
        <BaseButton onClick={onClose}>
          <img src={closeIcon} alt="" width={24} height={24} />
        </BaseButton>
      </div>
      <div className={styles.row}>
          <div className={styles.gap}>
            <img src={profileIcon} alt="" width={160} height={160}/>
            <BaseButton onClick={() => {}} className={styles.blueBorderButton}>
              <Typography color="#007BFF" textAlign="center">
                Change Profile Picture
              </Typography>
            </BaseButton>
          </div>
          <div className={styles.formSection}>
            <Input
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              isRequired={false}
              type='text'
            />
            <Input
              label="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              isRequired={false}
              type='text'
            />
            <Input
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              isRequired={false}
              type='text'
            />
            <div className={styles.buttonContainer}>
              <BaseButton 
                onClick={handleSubmit}
                className={styles.saveButton}>
                <Typography color="white">
                  Save
                </Typography>
              </BaseButton>
            </div>
            
          </div>
        </div>
    </Modal>
  )
};

export default ChangeProfileModal;