import { styled } from "@linaria/react";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  width: 60vw;
  box-shadow: 0 0 15px rgba(125, 125, 125, 0.2);
  padding: 20px;
  margin: 15px;
  justify-content: space-between;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;
`;

export const CardImage = styled.div`
  max-width: 30%;
  max-height: 250px;
  display: flex;
  overflow: hidden;
`;

export const CardAuthor = styled.p`
  color: #5a5a5a;
  padding-left: 10px;
  font-family: "Roboto", sans-serif;
  margin: 0px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  padding-left: 10px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin: 0px;
`;

export const CardGrid = styled.div`
  display: grid;
  gap: 10px;
  padding: 10px;
  overflow: hidden;
  width: 70%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const CardGridItemTitle = styled.p`
  color: #cfcfcf;
  font-family: "Roboto", sans-serif;
  margin: 0px;
`;
