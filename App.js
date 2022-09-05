import React from "react";
import { AplicationRouters } from "./AplicationRouters";
import GlobalStyle, { AppContainer } from "./styles/global";

import { ThemeContextProvider } from "./contexts/ThemeContext";

import { ListQuestionsTestContextProvider } from "./contexts/ListQuestionsTestContext";

import { AuthContextProvider } from "./contexts/AuthContext";

import { CandidatesTestsContextProvider } from "./contexts/CandidatesTestsContext";

import { ConfigsContextProvider } from "./contexts/ConfigsContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <CandidatesTestsContextProvider>
          <ListQuestionsTestContextProvider>
            <ConfigsContextProvider>
              <ThemeContextProvider>
                <AppContainer>
                  <GlobalStyle />
                  <AplicationRouters />
                </AppContainer>
              </ThemeContextProvider>
            </ConfigsContextProvider>
          </ListQuestionsTestContextProvider>
        </CandidatesTestsContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
