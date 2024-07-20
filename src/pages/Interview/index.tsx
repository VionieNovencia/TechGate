import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import micIcon from '../../assets/mic.png';
import mutedMic from '../../assets/muted-mic.png';
import camIcon from '../../assets/cam.png';
import offCamIcon from '../../assets/off-cam.png';
import shareScreenIcon from '../../assets/share-screen.png';
import dialOffIcon from '../../assets/dial-off.png';
import chevronUp from '../../assets/chevron-up.png';

import BaseButton from '../../components/BaseButton';
import Typography from '../../components/Typography';

import InterviewEntrance from './InterviewEntrance';

import styles from './styles';
import Navbar from '../../components/Navbar';

const InterviewPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [isStart, setIsStart] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing the camera: ', error);
      }
    };

    startCamera();
  }, [isStart]);

  const handleVideoToggle = () => {
    if (streamRef.current) {
      const videoTrack = streamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !isVideoEnabled;
        setIsVideoEnabled(!isVideoEnabled);
      }
    }
  };

  const handleAudioToggle = () => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !isAudioEnabled;
        setIsAudioEnabled(!isAudioEnabled);
      }
    }
  };

  const handleRejoin = () => {
    setIsDone(false);
    setIsStart(false);
    setIsAudioEnabled(true);
    setIsVideoEnabled(true);
  };

  return (
    <React.Fragment>
      {!isStart && !isDone && (
        <React.Fragment>
          <Navbar />
          <InterviewEntrance 
            handleJoin={() => setIsStart(true)}
            isVideoEnabled={isVideoEnabled}
            videoRef={videoRef}
            handleAudioToggle={handleAudioToggle}
            handleVideoToggle={handleVideoToggle}
            isAudioEnabled={isAudioEnabled}
          />
        </React.Fragment>
      )}
      {isStart && !isDone && (
        <React.Fragment>
          <div className={`${styles.cameraContainer} ${!isVideoEnabled && styles.cameraOffBackground}`}>
            <video ref={videoRef} autoPlay className={styles.videoElement} hidden={!isVideoEnabled} />
          </div>
          <Typography className={styles.name}>
            Michelle Lee
          </Typography>
          <div className={styles.row}>
            <div className={styles.flex}>
              <Typography>
                {moment().format('DD MMMM YYYY  HH:MM')}
              </Typography>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.buttonWrapper}>
                <BaseButton onClick={() => {}}>
                  <img src={chevronUp} alt='' width={40} height={40} />
                </BaseButton>
                <BaseButton onClick={handleVideoToggle} className={styles.button}>
                  <img src={isVideoEnabled ? camIcon : offCamIcon} alt='' width={50} height={50} />
                </BaseButton>
              </div>
              <div className={styles.buttonWrapper}>
                <BaseButton onClick={() => {}}>
                  <img src={chevronUp} alt='' width={40} height={40} />
                </BaseButton>
                <BaseButton onClick={handleAudioToggle} className={styles.button}>
                <img src={isAudioEnabled ? micIcon : mutedMic} alt='' width={50} height={50} />
              </BaseButton>
              </div>
              <BaseButton onClick={() => {}} className={styles.button}>
                <img src={shareScreenIcon} alt='' width={50} height={50} />
              </BaseButton>
              <BaseButton onClick={() => setIsDone(true)} className={styles.button}>
                <img src={dialOffIcon} alt='' width={56.5} height={56.5} />
              </BaseButton>
            </div>
            <div className={styles.flex} />
          </div>
        </React.Fragment>
      )}
      {isDone && (
        <React.Fragment>
          <Navbar />
          <div className={styles.center}>
            <Typography variant='headline' textAlign='center'>
              You left the meeting
            </Typography>
            <div className={styles.doneButtonContainer}>
              <BaseButton onClick={handleRejoin} className={styles.joinButton}>
                <Typography color='white'>
                  Rejoin
                </Typography>
              </BaseButton>
              <BaseButton onClick={() => navigate('/')} className={styles.joinButton}>
                <Typography color='white'>
                  Back to Home
                </Typography>
              </BaseButton>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default InterviewPage;
