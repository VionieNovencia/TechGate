import { css } from "@linaria/core";

const container = css`
  border: 1px solid #ccc;
  padding: 25px;
  border-radius: 15px;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default {
  container,
  flexRow
}