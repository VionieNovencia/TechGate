import { styled } from "@linaria/react";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
`;

export const ModalTitle = styled.p`
	display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #5A5A5A;
  margin-bottom: 0px;
  width: 100%;
  justify-content: center;
`;

export const ModalHeader = styled.div`
	display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
  box-shadow: 0 0 15px rgba(125, 125, 125, 0.2);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  animation: modal-fade-in 0.5s ease;
  @keyframes modal-fade-in {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
	margin-left: auto;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: transparent;

	&:hover,
	&:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
`;