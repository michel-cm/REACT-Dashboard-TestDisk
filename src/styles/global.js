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

    .button {
      background-color: #FC5A5A;
      color: #F8F8F8;
      padding: 18px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      box-shadow:0 5px 15px 0 rgba(0,0,0,.25);
    }
    .button:hover {
      opacity: 0.9;
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
