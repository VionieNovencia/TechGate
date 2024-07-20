import { css } from "@linaria/core";

const container = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 15px 25px;
  border-bottom: 1px solid #484848;
`;

const lastItem = css`
  border-width: 0;
  padding-bottom: 0;
`;

const logo = css`
  border-radius: 50%;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const row = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const logoPlaceholder = css`
  border-radius: 50%;
  background-color: #7e7e7e;
  width: 50px;
  height: 50px;
`;

const underline = css`
  text-decoration: underline,
`;

export default {
  container,
  logo,
  content,
  row,
  logoPlaceholder,
  lastItem,
  underline,
}