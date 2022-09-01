import styled from "styled-components";

export const SearchInput = styled.input`
  margin-left: 30px;
  border: 0;
  border-radius: 5px;
  width: 280px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.input};
  outline: 0;
  padding: 0px 60px 0px 16px;

  font-size: 15px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
`;

export const AreaInput = styled.div`
  display: flex;
  align-items: center;  
`;

export const IconSearch = styled.div`
  margin-left: -50px;
`;