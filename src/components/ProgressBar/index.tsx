import React from 'react';

import successIcon from '../../assets/success.png';
import failedIcon from '../../assets/failed.png';
import currentIcon from '../../assets/current.png';
import incomingIcon from '../../assets/not-completed.png';

import Typography from '../Typography';

import styles from './styles';
import NavLink from '../Link';

const Stepper = ({
  step,
  currentStep = -1,
  isFailed = false,
  url='',
}: {
  step: string[],
  currentStep?: number,
  isFailed?: boolean
  url?: string,
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
            <div>
              <Typography>
                {item}
              </Typography>
            </div>
          </div>
          {((idx < step.length - 1 && idx !== currentStep)|| (idx === currentStep &&  currentStep === 0)) && (
            <div className={idx < currentStep ? styles.bar : styles.greyBar} />
          )}
          <div>
            {idx === currentStep && currentStep !== 0 && currentStep !== step.length-1 && (
              <div className={styles.currentStep}>
                <div className={styles.currentBar} />
                <div className={styles.currentStepDetail}>
                  <Typography color='#6C757D'>
                    30 May 2024
                  </Typography>
                  <NavLink to={url}>
                    <Typography color='#007BFF'>
                      {currentStep === 2 && 'Join'}
                      {currentStep === 1 && 'Take test'}
                    </Typography>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
