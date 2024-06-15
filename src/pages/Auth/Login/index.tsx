import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import appleIcon from '../../../assets/apple.png';
import googleIcon from '../../../assets/google.png';
import facebookIcon from '../../../assets/facebook.png';

import Navbar from "../../../components/Navbar";
import Typography from "../../../components/Typography";

import styles from '../styles';

import { useAuth } from "../../../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {setIsLoggedIn} = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.authContainer}>
        <Typography variant='headline' textAlign="center">
          Welcome!
        </Typography>
        <form onSubmit={handleLogin} className={styles.gap}>
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
              className={styles.passwordInput}
            />
            <Typography textAlign="right" color="blue">
              forgot password?
            </Typography>
          </div>
          <button type="submit" className={styles.authButton}>
            <Typography variant="title2" color="white" textAlign="center">
              Login
            </Typography>
          </button>
        </form>
        <div className={styles.altAuth}>
          <div className={styles.line}></div>
          <Typography textAlign="center" color="#6C757D" margin={'auto'}>
            or login with
          </Typography>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.socialIconsContainer}>
        <button className={styles.socialIcons}>
            <img src={googleIcon} alt="Google" className={styles.socialIconImg}/>
        </button>
        <button className={styles.socialIcons}>
            <img src={facebookIcon} alt="Facebook" className={styles.socialIconImg}/>
        </button>
        <button className={styles.socialIcons}>
            <img src={appleIcon} alt="Apple" className={styles.socialIconImg}/>
        </button>
        </div>
        <div className={styles.registrationLinks}>
          <Typography variant="title2" margin={'0 12px 0 0'}>
            Don't have account? 
          </Typography>
          <Link to="/register" className={styles.link}>
            <Typography variant="title2" color="#FF7900">
              {'  '}
              Register now
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;