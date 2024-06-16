import { css } from '@linaria/core';

const container = css`
  background: none;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  outline: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  :active {
    opacity: 0.7;
  }

  :disabled {
    opacity: 1;
  }
`;

export default {
  container,
};
