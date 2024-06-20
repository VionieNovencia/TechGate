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
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 4px rgba(0,0,0,0.1);
  width: 920px;
  margin-top: 30px;
`;

const content = css`
  padding: 25px 40px 40px 40px;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

const coverImg = css`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const text = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const tabContainer = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #7E7E7E;
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
  flexRow,
  coverImg,
  text,
  tabContainer,
  tab,
  activeTab
}
