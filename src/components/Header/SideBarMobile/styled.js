import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 200px;
  background-color: ${(props) => props.theme.colors.backgroundAside};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0px;
  z-index: 9;  
  top: 0px;
  left: ${props => props.showMenu ? "0px" : "-250px"};
  
  position: fixed;

 

  @media (min-width: 961px) {
        display: none;
      }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textAside};
    width: 100%;
  }

  img {
    width: 70px;
  }
`;

export const AreaMenuItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  p {
    padding: 16px;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 8px;
  font-size: 12px;

  &&.selected {
    background-color: ${(props) => props.color};
  }

  &&:hover {
    background-color: ${(props) => props.color};
  }

  img {
    width: 20px;
  }
`;
