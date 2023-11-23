import styled from "styled-components";

const phoneBreakPoint = "575px";

export const StyledContactContainer = styled.main`
  height: 100vh;
`;

export const StyledUpperBox = styled.section`
  background-color: var(--brand--brand2);
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;

  .image_container {
    img {
      max-width: 300px;
    }
  }

  .loremIpsum_container {
  }
`;

export const InsideMiddleBoxUpperBox = styled.div`
  .boxes_wrapper {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;

    @media (max-width: ${phoneBreakPoint}) {
      flex-direction: column;
    }
  }

  .help_support_box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 300px;
    height: 300px;
    background: var(--grey--scale--grey-9);
    padding-top: 18px;
    border-radius: 12px;

    padding: 10px;
  }

  .general_info_box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 300px;
    height: 300px;
    background: var(--grey--scale--grey-9);
    padding-top: 18px;
    border-radius: 12px;

    padding: 10px;
  }

  .social_media_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    gap: 1rem;
  }

  .icon_wrapper {
    background-color: #235cbd;
    padding: 5px;
    border-radius: 12px;
    transition: 0.2s ease;
  }

  .icon_wrapper:hover {
    transform: scale(1.1);
  }
`;

export const StyledMiddleBox = styled.section`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  .middle_box_wrapper {
    max-width: 520px;
    width: 50%;
    height: 80%;

    background: var(--grey--scale--grey-10);
    border-radius: 12px;
    color: black;
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: ${phoneBreakPoint}) {
      width: 75%;
    }

    h1 {
      text-align: center;
      font-size: var(--heading---heading-4-600);
    }
  }

  .inner_middle_box_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .inner_middle_box_wrapper > div:nth-child(1),
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;
