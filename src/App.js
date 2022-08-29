import React from "react";
import { AplicationRouters } from "./AplicationRouters";
import GlobalStyle, { AppContainer } from "./styles/global";

import { ThemeContextProvider } from "./contexts/ThemeContext";

import { ListQuestionsTestContextProvider } from "./contexts/ListQuestionsTestContext";

function App() {
  return (
    <>
      <ListQuestionsTestContextProvider>
        <ThemeContextProvider>
          <AppContainer>
            <GlobalStyle />
            <AplicationRouters />
          </AppContainer>
        </ThemeContextProvider>
      </ListQuestionsTestContextProvider>
    </>
  );
}

export default App;
