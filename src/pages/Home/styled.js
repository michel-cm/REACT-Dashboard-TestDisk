import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;

  @media (max-width: 960px) {
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
  flex-wrap: wrap;
`;
export const AreaInfos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 0px 64px;
  justify-content: space-evenly;
`;
export const AreaChart = styled.div`
  width: flex 1;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AreaMediaTimersTests = styled.div`
  width: flex 1;
  min-width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimerMedia = styled.div`
  padding: 48px 32px;
  background-color: ${(props) => props.theme.colors.primary};
  border-left: 6px solid ${(props) => props.theme.colors.text};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
`;

export const Timer = styled.div`
  p {
    margin-top: 16px;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
  }
`;
