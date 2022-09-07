import styled from "styled-components";

export const Container = styled.div`
    min-height: 60px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    z-index: 8;

    margin-bottom: 60px;
    
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;

    position: fixed;

    img {
        width: 40px;
    }
    @media (min-width: 961px) {
        display: none;
      }
`;
