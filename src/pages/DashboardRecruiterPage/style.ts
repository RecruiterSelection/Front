import styled from "styled-components";

const phoneBreakPoint = "640px";

export const DashboardRecruiterContainer = styled.div`
  min-height: 100vh;
  margin-bottom: -50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const StyledUserDataContainer = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 400px;
  background-color: var(--white-fixed);
  border-radius: 12px;

  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  #recruiter_info_div,
  .other_infos_div,
  .skills_div {
    border: var(--grey--scale--grey-7) solid 1px;
    padding: 15px 20px;
    border-radius: 12px;
  }

  #recruiter_info_div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    @media (max-width: ${phoneBreakPoint}) {
      flex-direction: column;
    }
  }

  #recruiter_info_div > div:nth-child(2) > img {
    border-radius: 50%;
    width: 100px;
    margin-right: 3rem;
  }

  .other_infos_div {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;
  }

  #first_inside_other_infos_div > div {
    padding: 10px;
  }

  #icon_other_infos_div > svg {
    padding: 10px;
  }

  #icon_other_infos_div > svg:hover {
    cursor: pointer;
    color: var(--random--random-1);
  }
`;
