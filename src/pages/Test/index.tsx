import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Events } from '../../data/Event';

import TestEntrance from './TestEntrance';

import styles from './styles'; 
import Typography from '../../components/Typography';
import BaseButton from '../../components/BaseButton';
import ConfirmationModal from './ConfirmationModal';
import FormTest from './FormTest';
import CodeTest from './CodeTest';

const TestPage: React.FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false);
  
  const { id } = useParams<{ id: string }>();

  const event = Events['test'].find((event) => event.id === id);

  const navigate = useNavigate();

  if (!id) {
    return (
      <div>
        Not found
      </div>
    );
  }

  if (!event) {
    return (
      <div>
        Event not found
      </div>
    );
  }

  return (
    <React.Fragment>
      {!isStart && (
        <TestEntrance event={event} onClick={() => setIsStart(true)} />
      )}
      {isStart && !isDone && event.type ==='form' && (
        <FormTest event={event} onSubmit={() => setIsConfirmationModalOpen(true)} />
      )}
      {isStart && !isDone && event.type ==='code' && (
        <CodeTest event={event} onSubmit={() => setIsDone(true)}/>
      )}
      {isDone && (
        <div className={styles.center}>
          <Typography variant='headline' textAlign='center'>
            Your test has been submitted
          </Typography>
          <BaseButton onClick={() => navigate('/')} className={styles.backHomeButton}>
            <Typography color='white'>
              Back to Home
            </Typography>
          </BaseButton>
        </div>
      )}
      <ConfirmationModal
        isConfirmationModalOpen = {isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onSubmit={() => {
          setIsConfirmationModalOpen(false);
          setIsDone(true)
        }}
      />
    </React.Fragment>
  );
};

export default TestPage;
