import React from "react";
import { AplicationRouters } from "./AplicationRouters";
import GlobalStyle, { AppContainer } from "./styles/global";

import { ThemeContextProvider } from "./contexts/ThemeContext";

import { ListQuestionsTestContextProvider } from "./contexts/ListQuestionsTestContext";

import { AuthContextProvider } from "./contexts/AuthContext";

import { CandidatesTestsContextProvider } from "./contexts/CandidatesTestsContext";

import { ConfigsContextProvider } from "./contexts/ConfigsContext";
import { QtdPredominanciasContextProvider } from "./contexts/QtdPredominanciasContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ConfigsContextProvider>
          <CandidatesTestsContextProvider>
            <ListQuestionsTestContextProvider>
              <QtdPredominanciasContextProvider>
                <ThemeContextProvider>
                  <AppContainer>
                    <GlobalStyle />
                    <AplicationRouters />
                  </AppContainer>
                </ThemeContextProvider>
              </QtdPredominanciasContextProvider>
            </ListQuestionsTestContextProvider>
          </CandidatesTestsContextProvider>
        </ConfigsContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
