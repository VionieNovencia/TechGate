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

const container = css`
  width: 445px;
  padding: 25px;
  border-radius: 15px;
  align-items: center;
  background-color: #ffffff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 600;
`;

const cancel = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #4A4A4A;
  opacity: 0.8;
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
};
