import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { cx } from '@linaria/core';

import { defaultValues } from './constants';

import styles from './styles';

const Modal = ({
  children,
  isOpen,
  onClose,
  className = defaultValues.className,
  isDisableClickOverlay = defaultValues.isDisableClickOverlay,
  onStartOpenAnimation = defaultValues.onStartOpenAnimation,
  onAfterCloseAnimation = defaultValues.onAfterCloseAnimation,
}: {
  children: React.ReactNode,
  isOpen: boolean,
  onClose(): void,
  className?: string,
  isDisableClickOverlay?: boolean,
  onStartOpenAnimation?(): void,
  onAfterCloseAnimation?(): void,
}) => {
  useEffect(() => {
    if (isOpen) {
      // prevent scrolling when modal open
      document.body.classList.add(styles.removeOverflow);
    }

    return () => {
      document.body.classList.remove(styles.removeOverflow);
    };
  }, [isOpen]);

  return (
    <CSSTransition
      in={isOpen}
      timeout={250}
      unmountOnExit
      onEntered={onStartOpenAnimation}
      onExited={onAfterCloseAnimation}
    >
      <div className={styles.background}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          disabled={isDisableClickOverlay}
          onClick={onClose}
          className={styles.cancel}
        />

        <div className={styles.outerContainer}>
          <div
            className={cx(
              'modal-content',
              styles.container,
              className,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
