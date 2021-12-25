import React from "react";
import Nav from "./Nav/Nav";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../Button/Button.styled";

function Header() {
  return (
    <StyledHeader>
      <Nav />
      <article>
        <h1>Build The Community Your Fans Will Love</h1>

        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <StyledButton bg={({ theme }) => theme.color.pink}>
          Get Started For Free
        </StyledButton>
      </article>
    </StyledHeader>
  );
}

export default Header;
