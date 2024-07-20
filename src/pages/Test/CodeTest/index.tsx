import React, { useState } from "react";
import { cx } from "@linaria/core";
import Editor from "@monaco-editor/react";

import Typography from "../../../components/Typography";
import BaseButton from "../../../components/BaseButton";

import { codeQuestions } from "../../../data/Questions";

import styles from "./styles";

interface Event {
  id?: string,
  title: string;
  date: string;
  time: string;
  company: string;
  isDone: boolean;
  status: string;
  timeLimit: number;
}

const CodeTest = ({
  event,
  onSubmit,
} : {
  event: Event,
  onSubmit: () => void
}) => {
  const [code, setCode] = useState<string>("// Write your code here");
  const [currentNumber, setCurrentNumber] = useState<number>(1);

  const currentQuestion = codeQuestions[currentNumber - 1];
  return (
    <div className={styles.container}>
      <div className={styles.numberContainer}> 
        {codeQuestions.map((question) => (
          <div
            key={question.id}
            className={cx(styles.number, currentNumber === question.id && styles.selectedNumber)}
            onClick={() => setCurrentNumber(question.id)}
          >
            <Typography variant="title2">{question.id}</Typography>
          </div>
        ))}
      </div>
      <div className={styles.questionContainer}>
        <Typography variant="title1">
          {`Question ${currentNumber}`}
        </Typography>
        <div className={styles.textContainer}>
          <Typography variant="title2">
            Objective
          </Typography>
          <Typography>{currentQuestion.objective}</Typography>
        </div>
        <div className={styles.textContainer}>
          <Typography variant="title2">
            Task
          </Typography>
          <Typography>{currentQuestion.task}</Typography>
        </div>
        <div className={styles.textContainer}>
          <Typography variant="title2">
            Input Sample
          </Typography>
          <div className={styles.sampleInput}>
            <Typography>{currentQuestion.inputSample}</Typography>
          </div>
        </div>
        <div className={styles.textContainer}>
          <Typography variant="title2">
            Output Sample
          </Typography>
          <div className={styles.sampleInput}>
            <Typography>{currentQuestion.outputSample}</Typography>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.codingContainer} >
          <Editor
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={(newValue) => setCode(newValue || "")}
          />
        </div>
        <div className={styles.buttonContainer}>
          <BaseButton onClick={() => {}} className={styles.runButton}>
            <Typography color="#007BFF">
              Run Test
            </Typography>
          </BaseButton>
          <BaseButton onClick={onSubmit} className={styles.submitButton}>
            <Typography color="white">
              Submit
            </Typography>
          </BaseButton>
        </div>
      </div>
      
    </div>
  );
};

export default CodeTest;