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

  form {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    textarea {
      margin: 8px 0px 8px 0px;
      padding: 10px;
      font-size: 14px;
      resize: none;

      ::placeholder {
        color: #333;
      }
    }

    label {
      margin-top: 8px;
    }

    select {
      padding: 4px;
      margin-top: 8px;
    }
  }
`;

export const ButtonSubmit = styled.button`
  background-color: #fc5a5a;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
  color: #f8f8f8;
  border: none;
  padding: 15px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  margin-top: 16px;
`;

export const Modal = styled.div`
  width: 420px;
  height: 600px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 24px 32px;
  border-radius: 10px;
  overflow: auto;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 700;
`;

export const AreaClose = styled.div`
  text-align: end;
  padding-bottom: 8px;
`;
