import styled from "styled-components";

export const CardTotalQuestions = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  width: 28%;
  min-width: 180px;
  max-width: 300px;
 
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
  }

  p {
    font-size: 16px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }

  &&::before {
    content: "";
    width: 6px;
    height: 100px;
    background-color: ${(props) => props.value};
  }
`;

export const LineCard2 = styled.div`
  height: 32px;
  width: 1px !important;
  background-color:  ${(props) => props.theme.colors.text};
`;