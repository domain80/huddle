import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/Global.styled";
import Header from "./Components/Header/Header";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
