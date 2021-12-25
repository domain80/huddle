import styled from "styled-components";

export const StyledHeader = styled.header`
  background: url(./images/bg-hero-mobile.svg) no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0 5% 0;

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
    gap: 1em;
    padding: 1em;
  }
  & article button {
    width: max-content;
    margin: auto;
  }

  & .illustrationMockup {
    margin: 3em 2rem 1em;
  }
`;
