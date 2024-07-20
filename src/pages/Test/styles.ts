import { css } from "@linaria/core";

const container = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
`;

const contentContainer = css`
  width: 870px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const button = css`
  border-radius: 8px !important;
  background-color: #FF7900 !important;
  padding: 10px 30px !important;
  margin-top: 10px !important;
  align-self: flex-end;
`;

const gap = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


const questionNumberContainer = css`
  width: 230px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  flex-direction: row;
`;

const questionNumber= css`
  width: 34px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const blueBackground = css`
  background-color: #007BFF;
`;

const greyBackground = css`
  background-color: #D9D9D9;
`;

const darkerGreyBackground = css`
  background-color: #6C757D;
`;

const countdownContainer = css`
  margin: 20px 0;
`;

const input = css`
  border: 1px solid #6C757D;
  border-radius: 8px;
  width: 100%;
  height: 100px;
`;

const nextButton = css`
  padding: 10px 30px;
  border-radius: 8px;
  border: 1px solid #007BFF;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const submitButton = css`
  border-radius: 8px;
  background-color: #FF7900;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const backHomeButton = css`
  padding: 10px 30px;
  border-radius: 8px;
  background-color: #FF7900;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const flexRow = css`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const right = css`
  justify-content: right !important;
`;

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 30px;
  flex-direction: column;
`;

export default {
  container,
  contentContainer,
  button,
  questionNumberContainer,
  questionNumber,
  blueBackground,
  greyBackground,
  darkerGreyBackground,
  countdownContainer,
  input,
  nextButton,
  submitButton,
  flexRow,
  right,
  gap,
  backHomeButton,
  center,
};