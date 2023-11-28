import styled from "styled-components";

export const MatchingJobsContainer = styled.div`
  flex-direction: column;
  align-items: center;

  max-width: 600px;
  width: 100%;

  background-color: var(--white-fixed);
  border-radius: 12px;
  margin-bottom: 2rem;
  padding: 30px;
  display: flex;
  gap: 10px;

  .job_card_wrapper {
    max-height: 700px;
    overflow-y: auto;
  }
`;

export const JobCard = styled.div`
  margin: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

export const JobSkillList = styled.ul`
  list-style-type: none;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
`;

export const JobSkillItem = styled.li`
  font-size: 0.9em;

  p {
    background-color: var(--random--random4);
    color: var(--white-fixed);
    width: fit-content;
    padding: 5px;
    border-radius: 12px;
    margin: 2px;
  }
`;
