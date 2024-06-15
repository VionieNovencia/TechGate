import { css } from "@linaria/core";

const navbar = css`
  width: 100%;
  position: fixed;
  top: 0;
  background: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
`;

const navbarContainer = css`
  width: 1200px;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;


const navbarContainerLoggedIn = css`
  width: 1200px;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 60px;
`;

const navbarMenu = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;  
`;

const link = css`
  text-decoration: none;
`

export default {
  navbar,
  navbarContainerLoggedIn,
  navbarMenu,
  navbarContainer,
  link,
}