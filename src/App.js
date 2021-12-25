import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/Global.styled";
import Header from "./Components/Header/Header";
import Article from "./Components/styled/Articles/Article";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Article />
    </ThemeProvider>
  );
}

export default App;
