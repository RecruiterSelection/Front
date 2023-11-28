import styled from "styled-components";

export const ApplyForJobContainer = styled.div`
  color: black;

  background-color: var(--white-fixed);
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .modal_wrapper {
    max-height: 80vh;
    overflow: auto;
    max-width: 600px;
  }

  .job_wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .job_small_wrapper {
    display: flex;
    flex-direction: column;
    gap: 3px;

    padding: 8px 0;
  }

  .job_inside_wrapper {
    border: var(--grey--scale--grey-7) solid 1px;
    padding: 15px 20px;
    border-radius: 12px;
    text-align: justify;
  }

  .button_wrapper {
    button {
      color: var(--white-fixed);
      font-size: var(--text--body0);
      padding: 10px 30px;
      background-color: var(--random--random-1);
      border: none;
      border-radius: 4px;
    }
  }

  .subtitle {
    padding: 10px 0px;
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
