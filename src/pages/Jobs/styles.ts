import { css } from "@linaria/core";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const contentWithDetailContainer = css`
  width: 1200px;
  border-radius: 15px;
  background-color: white;
  padding: 25px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 4px rgba(0,0,0,0.1);
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
  box-shadow: 0 4px 4px rgba(0,0,0,0.1);
`;

const outerContainer = css`
  display: flex;
  flex-direction: column;
`;

const outerContainerWithDetail = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const contentWithDetail = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  scrollbar-width: none;
  height: calc(100vh - 200px);
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const tabContainer = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  border-bottom: 1px solid #7E7E7E;
  justify-content: center;
`;

const tab = css`
  padding: 5px 10px 0 10px;
`;

const activeTab = css`
  padding: 5px 10px 0 10px;
  border-bottom: 3px solid #007BFF;
`
export default {
  container,
  contentContainer,
  content,
  tab,
  tabContainer,
  activeTab,
  contentWithDetail,
  contentWithDetailContainer,
  outerContainer,
  outerContainerWithDetail
}