import React, { useState } from "react";

import Typography from "../../../../components/Typography";

import styles from '../../styles';

const Step2= ({
  onNext
}: {
  onNext: () => void
}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleRegister = (e: any) => {
    e.preventDefault();
    onNext()
  };

  return (
    <form onSubmit={handleRegister} className={styles.gap}>
      <div>
        <Typography variant="title2" >
          First Name
        </Typography>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className={styles.inputContainer}
        />
      </div>
      <div>
        <Typography variant="title2" >
          Last Name
        </Typography>
        <input
          type="test"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className={styles.inputContainer}
        />
      </div>
      <div>
        <Typography variant="title2" >
          Location
        </Typography>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className={styles.inputContainer}
        />
      </div>
      <button type="submit" className={styles.authButton}>
        <Typography variant="title2" color="white" textAlign="center">
          Next
        </Typography>
      </button>
    </form>
  );
}

export default Step2;