import React from "react";
import Typography from "../../../../components/Typography";

import styles from "../../styles";

const Step2 = ({
  onNext,
  email,
}: {
  onNext: () => void,
  email: string,
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
        {`We have sent 4 digits confirmation code to ${email}, please take a look and verify it`}
      </Typography>
      <form onSubmit={handleNext} className={styles.gap}>
        <button type="submit" className={styles.authButton}>
          <Typography variant="title2" color="white" textAlign="center">
            Verify Now
          </Typography>
        </button>
      </form>
    </React.Fragment>
  );
};

export default Step2;