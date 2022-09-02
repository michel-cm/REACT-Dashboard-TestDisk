import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
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
  padding: 60px 0px;
  display: flex;
  align-items: center;
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

  h3 {
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 600;
    padding-bottom: 10px;
  }
`;

export const TestAreaQuestionsDisable = styled.div`
  margin-top: 40px;
`;
