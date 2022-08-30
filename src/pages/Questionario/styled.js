import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 40px 24px;
`;

export const AreaCardsResume = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-wrap: wrap;
  gap: 20px 60px;
`;

export const CardTotalQuestions = styled.div`
  background-color: #333;
  display: flex;
  align-items: center;
  width: 260px;  
 

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
    height: 120px;
    background-color: ${(props) => props.value};
  }
`;

export const LineCard2 = styled.div`
  height: 32px;
  width: 1px !important;
  background-color: #f2f2f2;
`;

export const CardActiveQuestions = styled.div``;

export const CardDisableQuestions = styled.div``;

export const AreaAddQuestion = styled.div``;

export const AreaSearch = styled.div``;

export const TestArea = styled.div`
  margin-top: 60px;
`;

export const TesteListQuestions = styled.div``;
