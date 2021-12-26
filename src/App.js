import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/Global.styled";
import Header from "./Components/Header/Header";
import Article from "./Components/styled/Articles/Article";
import Footer from "./Components/styled/Footer/Footer";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="appContainer">
        <Header />
        <Article />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
