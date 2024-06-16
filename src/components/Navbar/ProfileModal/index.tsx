import React from "react";
import { CSSTransition } from 'react-transition-group';
import { cx } from '@linaria/core';

import { useAuth } from "../../../context/AuthContext";
import BaseButton from "../../BaseButton";
import Typography from "../../Typography";
import { useNavigate } from "react-router-dom";

import styles from './styles';

const ProfileModal = ({
  isOpen,
  onClose,
}:{
  isOpen: boolean,
  onClose: () => void,
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleProfile = () => {
    onClose();
    navigate('/profile')
  }

  const handleLogout = () => {
    onClose();
    logout();
    navigate('/login');
  }

  return(
    <CSSTransition
      in={isOpen}
      timeout={250}
      unmountOnExit
    >
      <div className={styles.background}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          onClick={onClose}
          className={styles.cancel}
        />

        <div className={styles.outerContainer}>
          <div className={styles.container}>
            <div
              className={cx(
                'modal-content',
                styles.contentContainer,
              )}
            >
              <div>
                <BaseButton onClick={handleProfile}>
                  <Typography>
                    View Profile
                  </Typography>
                </BaseButton>
                <BaseButton onClick={handleLogout}>
                  <Typography>
                    Logout
                  </Typography>
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
};

export default ProfileModal;