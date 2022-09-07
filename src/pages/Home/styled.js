import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;

  @media (max-width: 790px) {
    flex-direction: column;
  }
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
  gap: 20px 20px;
  width: 100%;
  margin-bottom: 34px;
`;

export const AreaChart = styled.div`  
  width: 100%;  
  height: 500px;
`;
