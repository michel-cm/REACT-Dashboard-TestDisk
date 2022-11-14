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
  width: 330px;
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
  padding: 18px;
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

export const AreaUpdatePassword = styled.div`
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  width: 360px;
  padding: 18px;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 0px 0px 32px 0;
  font-size: 14px;

  p {
    margin-bottom: 16px;
  }

  input {
    padding: 8px;
    width: 100%;
  }

  button {
    padding: 8px;
    margin-top: 8px;
    cursor: pointer;   
    font-weight: bold;
    width: 100px;
  }

  @media (max-width: 960px) {
    width: 390px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

export const Logout = styled.div`
  cursor: pointer;
  width: 180px;
  margin-top: 48px;
  border: 1px solid #2261bc;
  padding: 8px 24px;
  color: #2261bc;
  font-weight: 400;
  font-size: 15px;
  text-align: center;

  &:hover {
    background-color: #2261bc;
    color: #f8f8f8;
  }
`;
