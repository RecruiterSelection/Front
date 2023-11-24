import styled from "styled-components";

export const StyledSkillsModalContainer = styled.div`
  color: black;
  max-width: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .candidates_skill_ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;

    li {
      background-color: pink;
      padding: 3px 10px;
      width: max-content;
      border-radius: 10px;
    }
  }
`;

export const StyledAllSkillsContainer = styled.div`
  ul {
    list-style: none;
    max-height: 40vh;
    overflow: auto;
  }
`;
