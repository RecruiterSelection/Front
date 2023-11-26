import styled from "styled-components";

const phoneBreakPont = "640px";

export const StyledApplicationsContainer = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 400px;
  background-color: var(--white-fixed);
  border-radius: 12px;

  margin-bottom: 2rem;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .application_li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: aliceblue;

    border-radius: 12px;

    padding: 10px;
    cursor: pointer;

    @media (max-width: ${phoneBreakPont}) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .application_li:hover {
    filter: brightness(0.9);
    transition: filter 0.3s;
  }

  .application_status {
    display: flex;
    flex-direction: row;

    gap: 10px;
    align-items: center;
  }
  .application_status > span {
    background-color: black;
    width: 15px;
    display: block;
    height: 15px;
    border-radius: 50%;
  }

  .application_status > span.APPLIED {
    background-color: blue;
  }

  .application_status > span.REVIEWED {
    background-color: orange;
  }

  .application_status > span.INTERVIEWED {
    background-color: purple;
  }

  .application_status > span.HIRED {
    background-color: green;
  }

  .application_status > span.REJECTED {
    background-color: red;
  }
`;
