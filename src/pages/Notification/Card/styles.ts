import { css } from "@linaria/core";

const container = css`
  padding: 25px;
  display: flex;
  flex-direction: row;
  border: 1px solid #6C757D;
  border-radius: 15px;
  gap: 15px;
`;

const content = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 735px;
`;

export default {
  container,
  content,
  ellipsis,
};
