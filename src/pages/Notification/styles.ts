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
  width: 870px;
  border-radius: 15px;
  background-color: white;
  padding: 25px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default {
  container,
  contentContainer,
  content,
}