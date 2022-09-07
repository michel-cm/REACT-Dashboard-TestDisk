import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 60px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.4);

  border-radius: 0px 10px 10px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 99999;

  top: 50px;
  right: ${(props) => (props.modalClose ? "-275px" : "50px")};

  transition: all 0.5s;

  &::before {
    content: "";
    width: 8px;
    background-color: #3ab04d;
    height: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  padding: 0px 48px;
`;
