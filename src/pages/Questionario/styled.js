import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AreaCardsResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 40px;
  width: 100%;
`;

export const AreaSearchAndAdd = styled.div`
  padding-top: 60px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const TestArea = styled.div``;

export const TesteListQuestions = styled.div``;

export const CardQuestion = styled.div`
  margin: 24px 0px;
  padding: 18px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 90%;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);

  p {
    padding: 16px 0px;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const AreaTitle = styled.div`
  border-bottom: 1px solid rgba(77, 77, 77, 0.3);
  display: flex;

  justify-content: space-between;

  h3 {
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 600;
    padding-bottom: 10px;
  }
`;

export const AreaSetingsQuestion = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TestAreaQuestionsDisable = styled.div`
  margin-top: 20px;
`;

export const AreaFiltered = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  padding-right: 8px;
  width: 160px;
  margin-bottom: 16px;
  margin-top: 32px;
  border-radius: 0px 50px 50px 0;
  transition: all 0.1s ease 0s;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  border: none;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    opacity: 0.8;
  }

  &&::before {
    content: "";
    width: 6px;
    height: 40px;
    background-color: #2261bc;
  }
`;
