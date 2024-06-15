import React, { useState } from "react";
import { Link } from "react-router-dom";

import Typography from "../../../../components/Typography";

import appleIcon from '../../../../assets/apple.png';
import googleIcon from '../../../../assets/google.png';
import facebookIcon from '../../../../assets/facebook.png';

import styles from "../../styles";

const Step1 = ({
  onNext
}: {
  onNext: () => void
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

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
          <Typography variant="title1" >
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
          <Typography variant="title1" >
            Password
          </Typography>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputContainer}
          />
        </div>
        <div>
          <Typography variant="title1" >
            Confirm Password
          </Typography>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={styles.inputContainer}
          />
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
        <Typography variant="title2" margin={'0 12px 0 0'}>
          Already have account? 
        </Typography>
        <Link to="/login" className={styles.link}>
          <Typography variant="title2" color="#FF7900">
            {'  '}
            Login now
          </Typography>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Step1;
