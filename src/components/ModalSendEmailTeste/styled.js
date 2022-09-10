import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(77, 77, 77, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  transition: all 0.4s;
  z-index: 10;

  color: ${(props) => props.theme.colors.text};

  p {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
/*
  form {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    input {
      margin: 8px 0px 24px 0px;
      padding: 10px;
    }

    input.buttonSubmit {
      background-color: #fc5a5a;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      color: #f8f8f8;
      border: none;

      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    }
  }*/

  input {
      margin: 8px 0px 24px 0px;
      padding: 10px;
    }

`;

export const Modal = styled.div`
  width: 320px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 24px 32px;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const AreaClose = styled.div`
  text-align: end;
  padding-bottom: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;