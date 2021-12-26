import styled from "styled-components";

export const StyledButton = styled.button`
  border: 0;
  border-radius: 4rem;
  padding: 0.8em 2.7em;
  height: max-content;
  text-transform: capitalize;

  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.font.bold};
  cursor: pointer;

  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.bg || "hsl(322, 100%, 66%)"};
`;
