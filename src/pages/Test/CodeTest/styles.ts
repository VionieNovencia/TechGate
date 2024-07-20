import { css } from "@linaria/core";

const container = css`
  display: flex;
  flex-direction: row;
  width: 1440px;
  margin: auto;
`;

const numberContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const number = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #E9E9E9;
`;

const questionContainer = css`
  padding: 40px 25px;
  background-color: #D9D9D9;
  width: 520px;
  margin-right: 20px;
  height: calc(100vh - 150px);
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const codingContainer = css`
  width: 850px;
  height: calc(100vh - 170px);
  overflow-y: auto;
  padding-top: 20px;
  background-color: #1e1e1e;
`;

const buttonContainer = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: right;
  align-items: center;
  margin-top: 20px;
`;

const submitButton = css`
  padding: 10px 30px;
  border-radius: 8px;
  background-color: #FF7900;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const runButton = css`
  padding: 10px 30px;
  border-radius: 8px;
  border: 1px solid #007BFF;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const selectedNumber = css`
  background-color: #D9D9D9;
`;

const sampleInput = css`
  padding: 10px 15px;
  background-color: #F5F5F5;
  width: fit-content;
`;

const textContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


export default {
  container,
  numberContainer,
  number,
  questionContainer,
  codingContainer,
  submitButton,
  runButton,
  buttonContainer,
  selectedNumber,
  sampleInput,
  textContainer
}