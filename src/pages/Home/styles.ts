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
`;

const contentWithDetailContainer = css`
  width: 1200px;
  gap: 20px;
  display: flex;
  flex-direction: row;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  scrollbar-width: none;
  height: calc(100vh - 200px);
`;

const contentWithDetail = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  scrollbar-width: none;
  height: calc(100vh - 200px);
`;
  
export default {
  container,
  content,
  contentContainer,
  contentWithDetailContainer,
  contentWithDetail,
}