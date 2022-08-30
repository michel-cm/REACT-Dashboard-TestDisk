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

  transition: all 0.3s ease 0s;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textAside};
  }

  @media (max-width: 961px) {
    display: none;
  }

  img {
    width: 80px;
  }
`;

export const AreaMenuItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    p {        
        padding: 16px;
    }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center; 
  padding-left: 24px;
  margin-bottom: 8px;
  img {
    width: 24px;
    
  }
`;
