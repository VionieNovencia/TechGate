import React, { Dispatch, SetStateAction } from "react";
import Typography from "../../../../components/Typography";

import styles from "../../styles";

const Step1 = ({
  onNext,
  email,
  setEmail,
}: {
  onNext: () => void,
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
}) => {
  const handleNext= (e: any) => {
    e.preventDefault();
    onNext();
  };

  return (
    <React.Fragment>
      <Typography variant='headline' textAlign="center">
        Forgot Password
      </Typography>
      <Typography color="#6C757D" width="325px">
        Enter your email address below and we will send a link to reset your password
      </Typography>
      <form onSubmit={handleNext} className={styles.gap}>
        <div>
          <Typography variant="title2" >
            Email
          </Typography>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
    </React.Fragment>
  );
};

export default Step1;