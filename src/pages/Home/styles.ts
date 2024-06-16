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
  width: 920px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
  
export default {
  container,
  content,
  contentContainer,
}