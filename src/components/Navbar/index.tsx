import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../Typography";

import notificationIcon from '../../assets/notification.png';
import profileIcon from '../../assets/profile-picture.png';

import { useAuth } from "../../context/AuthContext";

import styles from './styles';
import ProfileModal from "./ProfileModal";
import BaseButton from "../BaseButton";
import NavLink from "../Link";

const Navbar = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const {isLoggedIn} = useAuth()

  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      {!isLoggedIn && (
        <div className={styles.navbarContainer}>
          <NavLink to='/'>
            <Typography
              variant='headline'
              color='#007BFF'
            >
              TechGate
            </Typography>
          </NavLink>
          <NavLink to='/login'>
            <Typography
              color='#FF7900'
            >
              Login
            </Typography>
          </NavLink>
        </div>
      )}
      {isLoggedIn && (
        <div className={styles.navbarContainerLoggedIn}>
          <NavLink to='/'>
            <Typography
              variant='headline'
              color='#007BFF'
            >
              TechGate
            </Typography>
          </NavLink>
          <div className={styles.navbarMenuContainer}>
            <div className={styles.navbarMenu}>
              <NavLink to='/'>
                <Typography>
                  Home
                </Typography>
              </NavLink>
              <NavLink to='/jobs'>
                <Typography>
                  Jobs
                </Typography>
              </NavLink>
              <NavLink to='/events'>
                <Typography>
                  Events
                </Typography>
              </NavLink>
            </div>
            <div className={styles.navbarMenu}>
              <BaseButton onClick={() => navigate('/notification')}>
                <img
                  src={notificationIcon}
                  alt="notificationIcon"
                  width={30}
                  height={30}
                />
              </BaseButton>
              <BaseButton onClick={() => setIsProfileModalOpen(true)}>
                <img
                  src={profileIcon}
                  alt="Profile"
                  width={40}
                  height={40}
                />
              </BaseButton>
            </div>
          </div>
          <ProfileModal
            isOpen={isProfileModalOpen}
            onClose={() => setIsProfileModalOpen(false)}
          />
        </div>
        )
      }
    </div>
  );
};

export default Navbar;