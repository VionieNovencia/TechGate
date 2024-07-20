import React, { useState, useEffect } from 'react';
import { cx } from '@linaria/core';
import { useNavigate, useParams } from 'react-router-dom';
import { Events } from '../../data/Event';
import { formQuestions } from '../../data/Questions';
import TestEntrance from './TestEntrance';

import styles from './styles'; 
import Typography from '../../components/Typography';
import BaseButton from '../../components/BaseButton';
import ConfirmationModal from './ConfirmationModal';

interface Question {
  type: string;
  question: string;
  options?: string[];
}

const TestPage: React.FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string | string[] }>({});
  const { id } = useParams<{ id: string }>();

  const event = Events['test'].find((event) => event.id === id);

  const initialCountdown = event ? event.timeLimit * 60 * 60 : 600; // timeLimit is in minutes
  const [countdown, setCountdown] = useState<number>(initialCountdown);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isStart) return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          alert('Time is up!');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStart]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

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

  const handleAnswerChange = (questionIndex: number, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
  };

  const renderQuestionInput = (question: Question, index: number) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      if (question.type === 'checkbox') {
        const currentAnswers = (answers[index] as string[]) || [];
        if (checked) {
          handleAnswerChange(index, [...currentAnswers, value]);
        } else {
          handleAnswerChange(index, currentAnswers.filter((answer) => answer !== value));
        }
      } else {
        handleAnswerChange(index, value);
      }
    };

    switch (question.type) {
      case 'text':
        return (
          <input 
            type="text"
            value={answers[index] as string || ''}
            onChange={handleChange}
            className={styles.input}
          />
        );
      case 'multiple_choice':
        return question.options?.map((option, idx) => (
          <div key={idx}>
            <input 
              type="radio" 
              id={`option-${idx}`} 
              name={`question-${index}`} 
              value={option}
              checked={answers[index] === option}
              onChange={handleChange}
            />
            <label htmlFor={`option-${idx}`}>{option}</label>
          </div>
        ));
      case 'checkbox':
        return question.options?.map((option, idx) => (
          <div key={idx}>
            <input 
              type="checkbox" 
              id={`option-${idx}`} 
              name={`question-${index}`} 
              value={option}
              checked={(answers[index] as string[])?.includes(option) || false}
              onChange={handleChange}
            />
            <label htmlFor={`option-${idx}`}>{option}</label>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {!isStart && (
        <TestEntrance event={event} onClick={() => setIsStart(true)} />
      )}
      {isStart && !isDone && (
        <div className={styles.container}>
          <div>
            <div className={styles.contentContainer}>
              <Typography variant='title3'>
                {`Question ${currentQuestionIndex + 1}`}
              </Typography>
              <div className={styles.gap}>
                <Typography variant='title3'>
                  {formQuestions[currentQuestionIndex].question}
                </Typography>
                <div>
                  {renderQuestionInput(formQuestions[currentQuestionIndex], currentQuestionIndex)}
                </div>
              </div>
            </div>
            <div className={cx(styles.flexRow, currentQuestionIndex === 0 && styles.right)}>
              {currentQuestionIndex !== 0 && (
                <BaseButton 
                  className={styles.nextButton} 
                  onClick={() => {setCurrentQuestionIndex(currentQuestionIndex-1)}}
                >
                  <Typography color='#007BFF'>
                    Prev
                  </Typography>
                </BaseButton>     
              )}
              {currentQuestionIndex !== formQuestions.length -1 && (
                <BaseButton 
                  className={styles.nextButton} 
                  onClick={() => {setCurrentQuestionIndex(currentQuestionIndex+1)}}
                >
                  <Typography color='#007BFF'>
                    Next
                  </Typography>
                </BaseButton>
              )}
              {currentQuestionIndex === formQuestions.length -1 && (
                <BaseButton 
                  className={styles.submitButton} 
                  onClick={() => {setIsConfirmationModalOpen(true)}}
                >
                  <Typography color='white'>
                    Submit
                  </Typography>
                </BaseButton>
              )}
            </div>
          </div>
          <div>
            <div className={styles.countdownContainer}>
              <Typography variant='title2'>
                {`Time remaining: ${formatTime(countdown)}`}
              </Typography>
            </div>
            <div className={styles.questionNumberContainer}>
              {formQuestions.map((_, index) => (
                <BaseButton 
                  key={index}
                  onClick={() => {setCurrentQuestionIndex(index)}} 
                  className={cx(
                    styles.questionNumber, 
                    answers[index] ? styles.blueBackground : styles.greyBackground,
                    currentQuestionIndex === index && styles.darkerGreyBackground
                  )}
                >
                  <Typography 
                    variant='title3' 
                    color={(answers[index] || currentQuestionIndex === index) ? 'white' : 'black'}
                  >
                    {index + 1}
                  </Typography>
                </BaseButton>
              ))}
            </div>
          </div>
        </div>
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
