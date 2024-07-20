import { css } from "@linaria/core";

const container = css`
  width: 876px;
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid #ccc; 
  border-radius: 8px;
  background-color: white; 
  color: #333; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const flexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 920px;
`;

const searchContainer = css`
  width: 270px; 
  margin: 8px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const searchInput = css`
  width: 300px; 
  border: none;

  &:focus {
    outline: none;
  }
`;

const wageInput = css`
  width: 90px; 
  border: none;

  &:focus {
    outline: none;
  }
`;

const wageContainer = css`
  display: flex;
  align-items: center;
`;

export default {
  container,
  searchContainer,
  searchInput,
  wageInput,
  flexRow,
  wageContainer,
}
