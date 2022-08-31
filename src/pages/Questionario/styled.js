import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 40px 25px;
  margin-left: 200px;
  width: 100%;
`;

export const AreaCardsResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 60px;
  width: 100%;
`;

export const CardTotalQuestions = styled.div`
 background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  width: 260px;
  box-shadow:0 5px 15px 0 rgba(0,0,0,.2);

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
  background-color: #fff;
  outline: 0;
  padding: 0px 60px 0px 16px;

  font-size: 16px;
  box-shadow:0 5px 15px 0 rgba(0,0,0,.2);
`;

export const TestArea = styled.div``;

export const AreaAccordion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  cursor: pointer;
  box-shadow:0 5px 15px 0 rgba(0,0,0,.2);
  padding: 3px 10px 3px 10px;
  width: 200px;
  margin-bottom: 16px;
  border-radius: 0px 25px 25px 0;
  transition: all 0.2s ease 0s; 
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    opacity: 0.8;
  }
`;

export const ArrowIcon = styled.img`
  transform: rotate(${(props) => (props.show ? "90deg" : "0deg")});
  
`;

export const TesteListQuestions = styled.div`
    
`;
