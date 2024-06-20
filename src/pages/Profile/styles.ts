import { css } from "@linaria/core";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const contentContainer = css`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const content = css`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;

const mainProfileSection = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #003A79;
  border-radius: 15px;
  padding: 40px;
`;

const profileSection = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  padding: 25px;
  border: 1px solid #49534B;
  gap: 12px;
`;

const text = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const buttonContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 20px
`;

const button = css`
  padding: 14px 30px;
  border-radius: 8px;
  border: 1px solid #003A79;
`;

export default {
  container,
  profileSection,
  contentContainer,
  content,
  text,
  mainProfileSection,
  flexRow,
  button,
  buttonContainer
}
