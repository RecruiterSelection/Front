import styled from "styled-components";

export const ModalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 100;

  width: 100%;
  height: 100%;

  animation-name: grow-modal;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;

  @keyframes grow-modal {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
    75% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.9;
    }
  }

  > div {
    position: relative;
    background-color: white;
    padding: 50px 30px;
    border-radius: 8px;

    > button {
      position: absolute;
      right: 5%;
      top: 5%;

      background-color: transparent;
      border: none;

      font-size: 18px;

      opacity: 0.8;
    }

    > button:hover {
      opacity: 1;
    }
  }
`;
