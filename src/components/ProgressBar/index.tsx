import React from 'react';

import successIcon from '../../assets/success.png';
import failedIcon from '../../assets/failed.png';
import currentIcon from '../../assets/current.png';
import incomingIcon from '../../assets/not-completed.png';

import Typography from '../Typography';

import styles from './styles';

const Stepper = ({
  step,
  currentStep = -1,
  isFailed = false,
}: {
  step: string[],
  currentStep?: number,
  isFailed?: boolean
}) => {
  const getIcon = (idx: number) => {
    if (isFailed && idx === step.length-1) return failedIcon;
    if (idx < currentStep) return successIcon;
    if (idx === currentStep) return currentIcon;
    return incomingIcon;
  }
  return (
    <div className={styles.container}>
      {step.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className={styles.flexRow}>
            <img src={getIcon(idx)} alt='' width={40} height={40}/>
            <Typography>
              {item}
            </Typography>
          </div>
          {idx < step.length - 1 && (
            <div className={idx < currentStep ? styles.bar : styles.greyBar} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
