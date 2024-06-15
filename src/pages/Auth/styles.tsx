import { css } from "@linaria/core";

const container = css`
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
  display: flex;
`;

const authContainer = css`
  padding: 40px;
  box-shadow: 0 4px 4px rgba(0,0,0,0.1);
  border-radius: 15px;
  text-align: center;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const inputContainer = css`
  width: 300px; 
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
`;

const multipleInputContainer = css`
  width: 300px; 
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const multipleInput = css`
  border: none;
  width: 100%;
  font-family: 'Open Sans', sans-serif;

  &:focus {
    outline: none;
  }
`

const dateInputContainer = css`
  width: 140px; 
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const authButton = css`
  width: 100%;
  padding: 10px;
  background-color: #FF7900;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

const socialIconsContainer = css`
  display: flex;
  gap: 25px;
  width: 100%;
  justify-content: center;
`;


const socialIconImg = css`
  width: 40px;
  height: 40px;
`;

const socialIcons = css`
  border: none;
  background: none;
  cursor: pointer;
`;

const registrationLinks = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const gap = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const altAuth = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const line = css`
  max-width: 105px;
  height: 1px;
  background: #6C757D;
  width: 100%;
`;

const passwordInput = css`
  width: 300px; 
  padding: 10px;
  margin: 8px 0 0 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const link = css`
  text-decoration: none;
`;

const checkbox = css`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const dropdownContainer = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const noExperienceContainer = css`
  background-color: #BFDEFF;
  border-radius: 15px;
  padding: 25px;
  width: 270px;
`;

const tagContainer = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const tag = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  padding: 6px 5px 6px 10px;
  margin-bottom: 5px;
  background-color: #D9D9D9;
  margin-right: 5px;
`;

export default {
  container,
  authButton,
  authContainer,
  inputContainer,
  line,
  altAuth,
  gap,
  registrationLinks,
  socialIconImg,
  socialIcons,
  socialIconsContainer,
  passwordInput,
  link,
  checkbox,
  dateInputContainer,
  dropdownContainer,
  noExperienceContainer,
  tag,
  tagContainer,
  multipleInputContainer,
  multipleInput,
}