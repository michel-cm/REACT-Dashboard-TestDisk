import React from "react";
import { AplicationRouters } from "./AplicationRouters";
import GlobalStyle, { AppContainer } from "./styles/global";

import { ThemeContextProvider } from "./contexts/ThemeContext";

import { ListQuestionsTestContextProvider } from "./contexts/ListQuestionsTestContext";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ListQuestionsTestContextProvider>
          <ThemeContextProvider>
            <AppContainer>
              <GlobalStyle />
              <AplicationRouters />
            </AppContainer>
          </ThemeContextProvider>
        </ListQuestionsTestContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
