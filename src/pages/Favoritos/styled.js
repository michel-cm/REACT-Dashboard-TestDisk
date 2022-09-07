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
  display: flex;
  flex-direction: column;
  width: 100%;
 
`;

export const TitleBancoTalentos = styled.h1`
  margin-bottom: 48px;
`;

export const AreaNoUsersFavorites = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const ContentNoUsersFavorites = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 790px) {
    padding: 32px;
  }
`;

export const titleAreaNoUsers = styled.h1`
  @media (max-width: 790px) {
    font-size: 24px;
  }
`;

export const descriptionAreaNoUsers = styled.p`
  font-size: 16px;

  @media (max-width: 790px) {
    margin-bottom: 16px;
  }
`;
