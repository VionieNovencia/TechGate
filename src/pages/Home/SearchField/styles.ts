import { css } from '@linaria/core';

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
  position: relative;
`;

const searchInput = css`
  width: 230px; 
  border: none;
  appearance: none; /* Hides the dropdown arrow in most browsers */
  -webkit-appearance: none; /* Hides the dropdown arrow in WebKit browsers */
  -moz-appearance: none; /* Hides the dropdown arrow in Firefox */
  
  &::-ms-expand {
    display: none; /* Hides the dropdown arrow in Internet Explorer and Edge */
  }

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

const clearButton = css`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const suggestionsContainer = css`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const suggestion = css`
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default {
  container,
  searchContainer,
  searchInput,
  wageInput,
  flexRow,
  wageContainer,
  clearButton,
  suggestionsContainer,
  suggestion,
};
