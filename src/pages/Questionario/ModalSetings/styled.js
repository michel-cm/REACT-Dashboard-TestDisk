import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(77, 77, 77, 0.4);
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
`;
export const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 24px 24px;
  border-radius: 10px;
  z-index: 9999;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AreaClose = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  span {
    padding: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const AreaMenu = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;

  p {
    font-size: 12px;
  }
`;

export const Edit = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Block = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Delet = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
