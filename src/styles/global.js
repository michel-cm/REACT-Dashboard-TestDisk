import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};        
        color: ${(props) => props.theme.colors.text};
        font-family: sans-serif;   
        
    }

    .MainContentPadingAndMargin {
      padding: 60px 25px 60px 25px;
      margin-left: 150px;
    
    }
`;



export const AppContainer = styled.div`
  height: 100vh;
  display: flex;

  @media (max-width: 961px) {
    display: flex;
    flex-direction: column;
  }
`;

