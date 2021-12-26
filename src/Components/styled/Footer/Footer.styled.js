import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.veryDarkCyan};
  padding: 10rem 8% 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  color: ${({ theme }) => theme.color.white};

  .navItemWithIcon {
    display: grid;
    grid-template-columns: 1.5em 1fr;
    align-items: flex-start;
    gap: 1rem;
    max-width: 25rem;
    padding: 0;
    margin-bottom: 2rem;
    .icon {
      max-width: 1em;
    }
    .icon-location {
      min-width: 100%;
      padding: 0;
      padding-top: 4px;
      margin: 0;
      height: max-content;
    }

    a {
      padding: 0;
      line-height: 1em;
      flex: 1 0 90%;
    }
  }
  & > * {
    width: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    list-style-position: outside;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .logo {
    width: 12rem;
    margin: 0 auto auto 0;
    margin-bottom: 2rem;
  }
  .social-icons {
    display: flex;
    gap: 1em;

    .social-icon {
      border: 2px solid currentColor;
      border-radius: 50%;
      padding: 0.4em;
      width: 1.82em;
      height: 1.82em;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .social-icon:hover {
      color: ${({ theme }) => theme.color.pink};
    }
  }

  small {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.grayishBlue};
  }

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: flex-start;

    .logo {
      grid-column: 1 / -1;
    }
    small {
      grid-column: 1 / -1;
      margin-left: auto;
      align-items: flex-end;
      text-align: right;
    }
  }
`;
