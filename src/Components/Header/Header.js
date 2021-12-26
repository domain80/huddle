import React, { useState } from "react";
import Logo from "../svgs/Logo";
import IllustrationMockups from "../svgs/IllustrationMockups";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../styled/Button/Button.styled";

function Header() {
  return (
    <StyledHeader>
      <nav>
        <Logo />
        <StyledButton color={`#111`} bg={"#fff"}>
          Try It Free
        </StyledButton>
      </nav>

      <section className="headerContent">
        <article>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <StyledButton>Get Started For Free</StyledButton>
        </article>
        <IllustrationMockups />
      </section>
    </StyledHeader>
  );
}

export default Header;
