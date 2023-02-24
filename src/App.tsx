import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { dark, light } from "./styles/theme";
import { isDarkState } from "./atom";

function App() {
  const isDark = useRecoilValue(isDarkState);
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
