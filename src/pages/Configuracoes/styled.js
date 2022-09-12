import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AreaTimerTest = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  width: 300px;
  padding: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 14px;

  input {
    width: 50px;
    height: 30px;
    background-color: ${(props) => props.theme.colors.background};
    border: none;
    color: ${(props) => props.theme.colors.text};
    text-align: center;
  }
  input::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const AreaMsgEmail = styled.div`
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  width: 360px;
  padding:18px;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 32px 0px;
  font-size: 14px;

  textarea {
    margin-top: 16px;
    padding: 4px;
  }

  @media (max-width: 960px) {
    width: 390px;
  }

`;

export const ButtonArea = styled.div``;
