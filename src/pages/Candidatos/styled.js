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
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AreaCardsResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;
  margin-bottom: 32px;
`;

export const AreaSearchAndAdd = styled.div`
  padding: 50px 0px 0px 0px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AreaAccordion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  padding-right: 8px;
  width: 260px;
  margin-bottom: 16px;
  border-radius: 0px 50px 50px 0;
  transition: all 0.2s ease 0s;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  &:hover {
    opacity: 0.8;
  }

  &&::before {
    content: "";
    width: 6px;
    height: 40px;
    background-color: ${(props) => props.value};
  }
`;

export const ArrowIcon = styled.img`
  transform: rotate(${(props) => (props.show ? "90deg" : "0deg")});
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
