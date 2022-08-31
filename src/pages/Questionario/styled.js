import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 40px 25px;
  margin-left: 200px;
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

export const AreaSearchAndAdd = styled.div`
  padding: 60px 0px;
  display: flex;
  align-items: center;

  img {
    margin-left: -50px;
    width: 20px;   
  }
  img:hover {
    cursor: pointer;
    opacity: 0.8;
  }
   
`;

export const SearchInput = styled.input`
  margin-left: 32px;
  border: 0;
  border-radius: 5px;
  width: 300px;
  height: 50px;
  background-color: #FFF;
  outline: 0;
  padding: 0px 60px 0px 16px;

  font-size: 16px;
`;

export const TestArea = styled.div`
  background-color: red;
`;

export const TesteListQuestions = styled.div``;
