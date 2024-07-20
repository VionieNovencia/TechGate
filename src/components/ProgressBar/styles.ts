import { css } from "@linaria/core";

const container = css`
  padding-bottom: 30px;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 100;
  gap: 10px;
`;

const bar = css`
  width: 5px;
  height: 50px;
  background-color: #047F82;
  margin-left: 17px;
  position: relative;
  top: 20px;
`;

const greyBar = css`
  width: 5px;
  height: 50px;
  background-color: #D9D9D9;
  margin-left: 17px;
  position: relative;
  top: 20px;
`;

export default {
  container,
  flexRow,
  bar,
  greyBar,
}