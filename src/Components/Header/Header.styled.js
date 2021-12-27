import styled from "styled-components";

export const StyledHeader = styled.header`
  background: url(./images/bg-hero-mobile.svg) no-repeat
    ${({ theme }) => theme.color.veryPaleCyan};
  background-position: center;
  background-size: cover;
  padding: 0 8% 0;

  & .headerContent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-top: 4rem;
  }

  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0 1em;
    grid-column: 1 / -1;
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
    gap: 0.6em;
    padding: 2em;
    max-width: 40rem;
    margin: 0 auto;
  }
  article h1 {
    margin: 1em 0 0;
    font-size: 2.8rem;
    line-height: 1em;
    /* padding: 0 1em; */
  }
  article p {
    line-height: 1.4;
  }
  article button {
    width: max-content;
    margin: auto;
  }

  & .illustrationMockup {
    margin: 3em 0rem 1em;
  }

  @media screen and (min-width: 781px) {
    padding: 0 8% 6em;

    article {
      text-align: left;
      gap: 8%;

      h1 {
        font-size: 2.3rem;
        line-height: 1.1;
      }
      button {
        margin: 0 auto 0 0;
      }
    }
  }
`;
