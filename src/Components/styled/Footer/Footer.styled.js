import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.veryDarkCyan};
  padding: 10rem 8% 2rem;

  color: ${({ theme }) => theme.color.white};

  & .navItemWithIcon {
    display: flex;
    align-items: start;
    gap: 1rem;
    max-width: 25rem;
    padding: 1em 0;
    .icon {
      flex: 0 1 6%;
    }

    a {
      padding: 0;
      line-height: 1em;
    }
  }

  ul {
    list-style: none;
    list-style-position: outside;
    padding: 0;

    li {
      margin: 1em 0;
    }
  }

  .logo {
    width: 12rem;
  }
`;
