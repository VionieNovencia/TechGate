import { css } from "@linaria/core";

const cardContainer = css`
  width: 868px;
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
`
const flexRow = css`
  display: flex;
  flex-direction: row;
  gap:15px;
`;

const darkBorder = css`
  border: 1px solid #49534B;
`

export default {
  cardContainer,
  cardWithDetailContainer,
  cardImage,
  closeIcon,
  flexRow,
  darkBorder,
}