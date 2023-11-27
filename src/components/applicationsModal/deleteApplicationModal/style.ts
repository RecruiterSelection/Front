import styled from "styled-components";

export const ModalContainer = styled.div`
  color: black;

  h1 {
    padding: 10px 30px;
  }

  .buttons_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button {
      color: var(--white-fixed);
      font-size: var(--text--body0);
      padding: 10px 30px;
      border: none;
      border-radius: 4px;
    }

    button:nth-child(1) {
      background-color: var(--feedback--alert-1);
    }

    button:nth-child(1):hover {
      transition: 0.2s;
      filter: saturate(1.3);
    }

    button:nth-child(2) {
      background-color: var(--random--random-1);
    }
  }
`;
