import styled from "styled-components";

const phoneBreakPoint = "740px";

export const StyledSkillsModalContainer = styled.div`
  margin-top: 1.5rem;

  color: black;
  max-width: min-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .my_skills_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    max-height: 30vh;
    width: auto;
  }

  .candidates_skill_ul,
  .tech_skills_ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;

    min-width: 600px;
    overflow: auto;

    @media (max-width: ${phoneBreakPoint}) {
      min-width: 250px;
      /* background-color: aqua; */
    }

    li {
      background-color: pink;
      padding: 3px 10px;
      width: max-content;
      border-radius: 10px;
      cursor: pointer;
    }

    span {
      opacity: 0;
      transition: 0.2s;
    }

    span:hover {
      opacity: 1;
    }

    li:hover {
      filter: brightness(1.1);
    }
  }
`;

export const StyledAllSkillsContainer = styled.div`
  margin-top: 1.5rem;

  color: black;
  max-width: min-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .tech_skills_ul {
    list-style: none;
    max-height: 30vh;
    justify-content: space-between;
  }

  .tech_skills_ul > li {
    background-color: var(--brand--brand2);
    color: var(--white-fixed);
  }

  li:hover {
  }
`;
