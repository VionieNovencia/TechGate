import { css } from "@linaria/core";

const container = css`
  width: fit-content;
`;

const row = css`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const closeIcon = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

const formSection = css`
  margin-right: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const saveButton = css`
  border-radius: 8px !important;
  background-color: #FF7900 !important;
  padding: 10px 20px !important;
  margin-top: 10px !important;
  width: 120px;
`;

const blueBorderButton = css`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #007BFF;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonContainer = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const gap= css`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
`;

export default {
  container,
  row,
  closeIcon,
  formSection,
  saveButton,
  blueBorderButton,
  buttonContainer,
  gap,
}