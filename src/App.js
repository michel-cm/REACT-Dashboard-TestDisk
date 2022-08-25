import React from "react";
import { AplicationRouters } from "./AplicationRouters";
import GlobalStyle from "./styles/global";

import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <AplicationRouters />
      </ThemeContextProvider>
    </>
  );
}

export default App;
