import React from "react";
import { Link } from "react-router-dom";
import Typography from "../Typography";

import { useAuth } from "../../context/AuthContext";

import styles from './styles';

const Navbar = () => {
  const {isLoggedIn} = useAuth()
  return (
    <div className={styles.navbar}>
      {!isLoggedIn && (
        <div className={styles.navbarContainer}>
          <Link to='/' className={styles.link}>
            <Typography
              variant='headline'
              color='#007BFF'
            >
              TechGate
            </Typography>
          </Link>
          <Link to='/login' className={styles.link}>
            <Typography
              color='#FF7900'
            >
              Login
            </Typography>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div className={styles.navbarContainerLoggedIn}>
          <Link to='/' className={styles.link}>
            <Typography
              variant='headline'
              color='#007BFF'
            >
              TechGate
            </Typography>
          </Link>
          <div className={styles.navbarMenu}>
            <Link to='/' className={styles.link}>
              <Typography>
                Home
              </Typography>
            </Link>
            <Link to='/jobs' className={styles.link}>
              <Typography>
                Jobs
              </Typography>
            </Link>
            <Link to='/events' className={styles.link}>
              <Typography>
                Events
              </Typography>
            </Link>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Navbar;