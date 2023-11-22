import styled from "styled-components";

const phoneBreakPoint = "576px";

export const StyledFooter = styled.footer`
  background-color: var(--brand--brand3);
  padding: 0;
  position: sticky;
  bottom: 0;
  max-width: 100vw;
  height: 50px;
`;

export const LogoWrapper = styled.div``;
export const AllRightsReservedWrapper = styled.div``;
export const ButtonWrapper = styled.div`
  button {
    background-color: none;
    background: transparent;
    border: none;
  }
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: var(--white-fixed);
    font-size: 12px;
    font-weight: 400;

    @media (max-width: ${phoneBreakPoint}) {
      font-size: 8px;
    }
  }

  #logo {
    max-width: 150px;
    max-height: 100px;
  }
`;
