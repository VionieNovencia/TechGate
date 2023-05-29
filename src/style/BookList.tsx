import { styled } from "@linaria/react";

export const BookListContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const BookListInfo = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const AddButton = styled.button`
	background-color: #ff6f81;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: #FFFFFF;
  cursor: pointer;
  width: 100px;
`;