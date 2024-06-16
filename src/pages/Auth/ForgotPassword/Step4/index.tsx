import React, { useState } from "react";

import Typography from "../../../../components/Typography";
import BaseButton from "../../../../components/BaseButton";

import hideIcon from '../../../../assets/hide.png';
import showIcon from '../../../../assets/show.png';

import styles from "../../styles";

const Step4 = ({
  onNext
}: {
  onNext: () => void
}) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState<boolean>(false);

  const handleRegister = (e: any) => {
    e.preventDefault();
    onNext();
  };

  return (
    <React.Fragment>
      <Typography variant='headline' textAlign="center">
        Forgot Password
      </Typography>
      <form onSubmit={handleRegister} className={styles.gap}>
        <div>
          <Typography variant="title1" >
            New Password
          </Typography>
          <div className={styles.passwordContainer}>
            <input
              type={isShowPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.passwordInput}
            />
            <BaseButton onClick={() => setIsShowPassword(!isShowPassword)}>
              <img
                src={isShowPassword ? showIcon : hideIcon}
                alt="" 
                width={24}
                height={24}
              />
            </BaseButton>
          </div>
        </div>
        <div>
          <Typography variant="title1" >
            Confirm Password
          </Typography>
          <div className={styles.passwordContainer}>
            <input
              type={isShowConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.passwordInput}
            />
            <BaseButton onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
              <img
                src={isShowConfirmPassword ? showIcon : hideIcon}
                alt="" 
                width={24}
                height={24}
              />
            </BaseButton>
          </div>
        </div>
        <button type="submit" className={styles.authButton}>
          <Typography variant="title2" color="white" textAlign="center">
            Submit
          </Typography>
        </button>
      </form>
    </React.Fragment>
  );
};

export default Step4;
