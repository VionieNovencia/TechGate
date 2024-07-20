import { css } from "@linaria/core";

const container = css`
  width: 920px;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
`;

const cameraContainer = css`
  width: 640px;
  height: 376px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

const videoElement = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
`;

const buttonContainer = css`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
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
  max-width: 150px;
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
};
