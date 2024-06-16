import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

import appleIcon from '../../../assets/apple.png';
import googleIcon from '../../../assets/google.png';
import facebookIcon from '../../../assets/facebook.png';
import hideIcon from '../../../assets/hide.png';
import showIcon from '../../../assets/show.png';

import Navbar from "../../../components/Navbar";
import Typography from "../../../components/Typography";

import styles from '../styles';

import { useAuth } from "../../../context/AuthContext";
import NavLink from "../../../components/Link";
import BaseButton from "../../../components/BaseButton";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

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
            <NavLink to='/forgot-password'>
              <Typography textAlign="right" color="blue">
                forgot password?
              </Typography>
            </NavLink>
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
          <Typography variant="title2" margin={'0 5px 0 0'}>
            Don't have account? 
          </Typography>
          <NavLink to="/register">
            <Typography variant="title2" color="#FF7900">
              {'  '}
              Register now
            </Typography>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;