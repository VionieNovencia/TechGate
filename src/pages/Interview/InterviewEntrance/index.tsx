import React, { RefObject } from 'react';

import Typography from '../../../components/Typography';
import BaseButton from '../../../components/BaseButton';

import micIcon from '../../../assets/mic.png';
import muredMic from '../../../assets/muted-mic.png';
import camIcon from '../../../assets/cam.png';
import offCamIcon from '../../../assets/off-cam.png';

import styles from './styles';

const InterviewEntrance = ({
  handleJoin,
  isVideoEnabled,
  videoRef,
  handleVideoToggle,
  handleAudioToggle,
  isAudioEnabled,
} : {
  handleJoin: () => void,
  isVideoEnabled: boolean,
  videoRef: RefObject<HTMLVideoElement>,
  handleVideoToggle: () => void,
  handleAudioToggle: () => void,
  isAudioEnabled: boolean,
}) => {

  return (
    <div className={styles.container}>
      <div className={`${styles.cameraContainer} ${!isVideoEnabled && styles.cameraOffBackground}`}>
        <video ref={videoRef} autoPlay className={styles.videoElement} hidden={!isVideoEnabled} />
        <div className={styles.textContainer}>
          <Typography>
            Michelle Lee
          </Typography>
        </div>
        <div className={styles.buttonContainer}>
          <BaseButton onClick={handleAudioToggle} className={styles.button}>
            <img src={isAudioEnabled ? micIcon : muredMic} alt='' width={60} height={60} />
          </BaseButton>
          <BaseButton onClick={handleVideoToggle} className={styles.button}>
            <img src={isVideoEnabled ? camIcon : offCamIcon} alt='' width={60} height={60} />
          </BaseButton>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Typography variant="title1">
          Ready to join?
        </Typography>
        <BaseButton onClick={handleJoin} className={styles.joinButton}>
          <Typography color="white">
            Join now
          </Typography>
        </BaseButton>
      </div>
    </div>
  );
};

export default InterviewEntrance;
