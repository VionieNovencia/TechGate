import { css } from "@linaria/core";

const container = css`
  width: 1200px;
  margin: auto;
`;

const cameraContainer = css`
  width: 100%;
  height: calc(100vh - 100px);
`;

const videoElement = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const buttonContainer = css`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

const doneButtonContainer = css`
  display: flex;
  width: 100%;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

const button = css`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
`;

const cameraOffBackground = css`
  background-color: #d9d9d9;
`;

const joinButton = css`
  border-radius: 8px;
  background-color: #FF7900 ;
  padding: 10px 20px;
  width: 150px;
`;

const rightContainer = css`
  display: flex;
  width: 280px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;
`;

const textContainer = css`
  position: absolute;
  top: 25px;
  left: 25px;
`;

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 30px;
  flex-direction: column;
`;

const row = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

const flex = css`
  flex: 1;
`;

const name = css`
  transform: translateY(-50px);
  padding-left: 25px;
`;

const buttonWrapper = css`
  display: flex;
  flex-direction: row;
  background-color: #D9D9D9;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  border: 1px solid #7e7e7e;
`;

export default {
  container,
  cameraContainer,
  videoElement,
  buttonContainer,
  button,
  cameraOffBackground,
  joinButton,
  rightContainer,
  textContainer,
  center,
  doneButtonContainer,
  row,
  flex,
  name,
  buttonWrapper,
};
