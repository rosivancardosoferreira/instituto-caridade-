import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import DefaultTheme from "../styles/themes/default";
import { ThemeProvider } from "styled-components";
import Routes from "infra/routes";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Routes />
    </ThemeProvider>
  );
};

export default App