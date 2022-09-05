import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  width: 22%;
  min-width: 180px;
  max-width: 300px;
  padding-right: 4px;

  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);

  p {
    font-size: 14px;
  }

  span {
    font-size: 19px;
    font-weight: bold;
  }

  &&::before {
    content: "";
    width: 6px;
    height: 90px;
    background-color: ${(props) => props.value};
  }
`;

export const LineCard2 = styled.div`
  height: 32px;
  width: 1px !important;
  background-color: ${(props) => props.theme.colors.text};
`;

export const AreaContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`;

export const AreaTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: ${(props) => props.color};
  }
`;
