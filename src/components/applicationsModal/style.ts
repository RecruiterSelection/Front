import styled from "styled-components";

export const ApplicationModalContainer = styled.div`
  color: black;

  width: 500px;
  min-height: 400px;
  background-color: var(--white-fixed);
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .modal_wrapper > header {
    padding: 15px 20px;
  }

  .application_content_wrapper {
    display: flex;
    flex-direction: column;
  }

  .info_content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .info_content > div {
    border: var(--grey--scale--grey-7) solid 1px;
    padding: 15px 20px;
    border-radius: 12px;
    text-align: justify;
  }

  .show_job_info {
    display: flex;
    flex-direction: row;
    padding: 15px 20px;
    align-items: center;
    gap: 10px;
    width: fit-content;

    h1 {
      cursor: pointer;
    }
  }

  .show_job_info:hover {
    background-color: var(--grey--scale--grey-7);
    border-radius: 12px;
    transition: 0.2s;
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
