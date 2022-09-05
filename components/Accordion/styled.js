import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  padding-right: 8px;
  width: 260px;
  margin-bottom: 16px;
  margin-top: 32px;
  border-radius: 0px 50px 50px 0;
  transition: all 0.1s ease 0s;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  border: none;
  color:  ${(props) => props.theme.colors.text};

  &:hover {
    opacity: 0.8;
  }

  &&::before {
    content: "";
    width: 6px;
    height: 40px;
    background-color: ${(props) => props.value};
  }
`;

export const ArrowIcon = styled.img`
  transform: rotate(${(props) => (props.show ? "90deg" : "0deg")});
`;
