import { css } from "@linaria/core";

const container = css`
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #49534B;
  height: fit-content;
  max-width: 580px;
`;

const headSection = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

const headContent = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const divider = css`
  height: 1px;
  background-color: #7E7E7E;
  width: 100%;
  margin: 20px 0;
`;

const gap20px = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5px;
`;

const gap5px = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0;
`;

const buttonContainer = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 10px;
`;

const applyButton = css`
  padding: 10px 30px;
  border-radius: 8px;
  background-color: #FF7900;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const saveButton = css`
  border-radius: 8px;
  background-color: #007BFF;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const savedButton = css`
  padding: 10px 30px;
  border-radius: 8px;
  border: 1px solid #007BFF;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const appliedButton = css`
  padding: 10px 30px;
  border-radius: 8px;
  border: 1px solid #FF7900;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  container,
  headSection,
  headContent,
  flexRow,
  divider,
  gap20px,
  gap5px,
  appliedButton,
  applyButton,
  saveButton,
  savedButton,
  buttonContainer
};
