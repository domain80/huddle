import styled from "styled-components";

export const StyledHeader = styled.header`
  background: url(./images/bg-hero-mobile.svg) no-repeat
    ${({ theme }) => theme.color.veryPaleCyan};
  background-position: center;
  background-size: cover;
  padding: 0 8% 0;

  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0 1em;
  }
  & nav button {
    box-shadow: 0 1px 6px -3px ${({ theme }) => theme.color.grayishBlue};
  }

  & nav svg {
    width: 8rem;
  }

  & article {
    text-align: center;
    display: grid;
    gap: 0.9em;
    padding: 2em;
  }
  & article h1 {
    margin: 1em 0 0;
    /* padding: 0 1em; */
  }
  & article button {
    width: max-content;
    margin: auto;
  }

  & .illustrationMockup {
    margin: 3em 0rem 1em;
  }
`;
