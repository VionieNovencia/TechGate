import { css } from "@linaria/core";

const container = css`
  width: 100%;
`;

const closeIcon = css`
  width: 24px;
  height: 24px;
`;

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const input = css`
  color: transparent;

  &::-webkit-file-upload-button {
    display: none;
  }

  &::before {
    content: 'Upload';
    color: #007BFF;
    display: flex;
    outline: none;
    white-space: nowrap;
    user-select: none;
    align-items: center;
    justify-content: right;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 10pt;
    font-family: 'open sans';
  }

  &:hover::before {
    border-color: black;
  }

  &:active {
    outline: 0;
  }

  &:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9); 
  }
`;

const fileItem = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 10px;
`;

const radioButton = css`
  margin: 0;
`;

const form = css`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const button = css`
  border-radius: 8px !important;
  background-color: #FF7900 !important;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export default {
  container,
  closeIcon,
  header,
  input,
  fileItem,
  radioButton,
  form,
  button
};
