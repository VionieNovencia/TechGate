import { styled } from "@linaria/react";

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Input = styled.input`
	width: calc(100% - 20px);
  height: 30px;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: #f6f6f6;
`;

export const SubmitButton = styled.button`
	background-color: #ff6f81;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: #FFFFFF;
  cursor: pointer;
  width: 200px;
  float: right;
`;

export const Select = styled.select`
	width: calc(100% - 5px);
  height: 35px;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: #f6f6f6;
`;

export const Label = styled.label`
	font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #5A5A5A;
  align-self: flex-start;
`;

export const ErrorMessage = styled.span`
	display: flex;
  flex-direction: column;
`;

export const FormItem = styled.div`
	margin: 20px;
`;

export const Error = styled.span`
	color: red;
  font-size: 12px;
  margin: 0;
  margin-bottom: 10px;
`;