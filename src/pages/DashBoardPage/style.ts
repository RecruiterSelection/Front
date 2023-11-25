import styled from "styled-components";

const phoneBreakPoint = "640px";

export const StyledDashboardContainer = styled.main`
  /* height: calc(100vh - 60px - 40px); */
  min-height: calc(100vh - 40px);
  /* height: 100%; */

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
  margin-bottom: 2rem;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  #candidate_info_div,
  .other_infos_div,
  .skills_div {
    border: var(--grey--scale--grey-7) solid 1px;
    padding: 15px 20px;
    border-radius: 12px;
  }

  #candidate_info_div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    @media (max-width: ${phoneBreakPoint}) {
      flex-direction: column;
    }
  }

  #candidate_info_div > div:nth-child(2) > img {
    border-radius: 50%;
    width: 100px;
    margin-right: 3rem;
  }

  .skills_div {
    button {
      color: var(--white-fixed);
      font-size: var(--text--body0);
      padding: 10px 30px;
      background-color: var(--random--random-1);
      border: none;
      border-radius: 4px;
    }

    button:hover {
      background-color: var(--random--random-2);
      transition: 0.3s;
    }

    @media (max-width: ${phoneBreakPoint}) {
      align-self: center;
    }
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

  .info-enter {
    max-height: 0;
    opacity: 0;
    transition: opacity 500ms, max-height 500ms;
  }
  .info-enter-active {
    opacity: 1;
    max-height: 1000px;
  }
  .info-exit {
    opacity: 1;
    max-height: 1000px;
  }
  .info-exit-active {
    opacity: 0;
    max-height: 0;
    transition: opacity 500ms, max-height 500ms;
  }
`;
