import { css } from "@linaria/core";

const cardContainer = css`
  max-width: calc(100% - 50px);
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  gap:15px;
  background: white;
  justify-content: space-between;
`;

const cardWithDetailContainer = css`
  width: 500px;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  gap:15px;
  background: white;
  justify-content: space-between;
`;

const cardImage = css`
  border-radius: 50%;
`;

const closeIcon = css`
  width: 24px;
  height: 24px;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  gap:15px;
`;

const darkBorder = css`
  border: 1px solid #49534B;
`;

const applyButton = css`
  border-radius: 8px !important;
  background-color: #FF7900 !important;
  padding: 10px 20px !important;
  margin-top: 10px !important;
`;

const appliedButton = css`
  border: 1px solid #FF7900 !important;
  border-radius: 8px !important;
  padding: 10px 20px !important;
  margin-top: 10px !important;
`;

export default {
  cardContainer,
  cardWithDetailContainer,
  cardImage,
  closeIcon,
  flexRow,
  darkBorder,
  applyButton,
  appliedButton,
}