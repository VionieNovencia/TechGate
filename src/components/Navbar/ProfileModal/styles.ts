import { css } from '@linaria/core';

const background = css`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 500;
`;

const outerContainer = css`
  min-width: 1200px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const contentContainer = css`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  background-color: #ffffff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 600;
  position: absolute;
  right: 0;
  top: 80px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const container = css`
  position: relative;
  width: 1200px;
  height: 100vh;
`;

const cancel = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4A4A4A;
  opacity: 0;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 500;
`;

const removeOverflow = css`
  overflow: hidden;
`;

export default {
  background,
  outerContainer,
  container,
  cancel,
  removeOverflow,
  contentContainer,
};
