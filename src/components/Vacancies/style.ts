import styled from "styled-components";

const phoneBreakPoint = "900px";

export const StyledVacanciesContainer = styled.ul`
  margin-top: 3rem;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  place-items: center;

  @media (max-width: ${phoneBreakPoint}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledVacancyBox = styled.li`
  background-color: var(--white-fixed);
  color: black;

  width: 400px;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 2rem 1rem;
  border-radius: 12px;

  h2 {
    font-size: var(--heading---heading-7-600);
  }

  p {
    font-size: var(--text--body0);
  }

  .jobType_wrapper {
    display: flex;
    flex-direction: column;
  }

  .description_wrapper {
    display: flex;
    flex-direction: column;
  }

  .requirements_wrapper {
    display: flex;
    flex-direction: column;
  }

  .button_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1rem;
  }
  .vacancy_button {
    background-color: var(--random--random-1);
    border: none;
    color: var(--white-fixed);
    padding: 5px 25px;
    border-radius: 4px;
  }
`;
