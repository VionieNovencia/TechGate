import { css } from "@linaria/core";

const container = css`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const contentContainer = css`
  width: 920px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const text = css`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;
`;

const button = css`
  border-radius: 8px !important;
  background-color: #FF7900 !important;
  padding: 10px 30px !important;
  margin-top: 10px !important;
  align-self: flex-end;
`;

export default {
  container,
  contentContainer,
  text,
  button,
};