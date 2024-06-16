import React, { useState } from "react";

import Typography from "../../../../components/Typography";
import NavLink from "../../../../components/Link";

import appleIcon from '../../../../assets/apple.png';
import googleIcon from '../../../../assets/google.png';
import facebookIcon from '../../../../assets/facebook.png';
import hideIcon from '../../../../assets/hide.png';
import showIcon from '../../../../assets/show.png';

import styles from "../../styles";
import BaseButton from "../../../../components/BaseButton";

const Step1 = ({
  onNext
}: {
  onNext: () => void
}) => {
  const [email, setEmail] = useState<string>('');
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
        Welcome!
      </Typography>
      <form onSubmit={handleRegister} className={styles.gap}>
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
        <div>
          <Typography variant="title2" >
            Password
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
          <Typography variant="title2" >
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
            Register
          </Typography>
        </button>
      </form>
      <div className={styles.altAuth}>
        <div className={styles.line}></div>
        <Typography textAlign="center" color="#6C757D" margin={'auto'}>
          or register with
        </Typography>
        <div className={styles.line}></div>
      </div>
      
      <div className={styles.socialIconsContainer}>
        <button className={styles.socialIcons}><img src={googleIcon} alt="Google" /></button>
        <button className={styles.socialIcons}><img src={facebookIcon} alt="Facebook" /></button>
        <button className={styles.socialIcons}><img src={appleIcon} alt="Apple" /></button>
      </div>
      <div className={styles.registrationLinks}>
        <Typography variant="title2" margin={'0 5px 0 0'}>
          Already have account? 
        </Typography>
        <NavLink to="/login" >
          <Typography variant="title2" color="#FF7900">
            {'  '}
            Login now
          </Typography>
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Step1;
