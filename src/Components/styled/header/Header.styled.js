import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  min-height: 80vh;

  background: url(./images/bg-hero-desktop.svg);
`;
