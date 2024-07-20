import React from 'react';
import Modal from '../../../components/Modal';

import close from '../../../assets/close-icon.png';
import BaseButton from '../../../components/BaseButton';

import styles from './styles';
import Typography from '../../../components/Typography';

const ConfirmationModal = ({
  isConfirmationModalOpen,
  onClose,
  onSubmit,
}: {
  isConfirmationModalOpen: boolean,
  onClose: () => void,
  onSubmit: () => void,
}) => (
  <Modal
    isOpen={isConfirmationModalOpen}
    onClose={onClose}
    className={styles.container}
  >
    <div className={styles.header}>
      <BaseButton onClick={onClose}>
        <img src={close} alt="" width={24} height={24} />
      </BaseButton>
    </div>
    <Typography width='180px' textAlign='center'>
      Are you sure you want to submit?
    </Typography>
    <div className={styles.flexRow}>
      <BaseButton onClick={onClose}>
        <Typography color='white' className={styles.button}>
          No
        </Typography>
      </BaseButton>
      <BaseButton onClick={onSubmit} className={styles.button}>
        <Typography color='white'>
          Yes
        </Typography>
      </BaseButton>
    </div>
  </Modal>
);

export default ConfirmationModal