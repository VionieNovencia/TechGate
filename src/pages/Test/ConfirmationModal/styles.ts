import { css } from "@linaria/core";

const container = css`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const header = css`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  width: 100%;
`;

const button = css`
  border-radius: 8px;
  background-color: #FF7900;
  width: 70px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export default {
  container,
  header,
  button,
  flexRow,
}