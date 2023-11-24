import styled from "styled-components";

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
  width: 500px;
  min-height: 400px;
  background-color: var(--white-fixed);
  border-radius: 12px;

  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  #candidate_info_div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  #candidate_info_div > div:nth-child(2) > img {
    border-radius: 50%;
    width: 100px;
    margin-right: 3rem;
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
