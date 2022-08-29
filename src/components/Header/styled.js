import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    background-color: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;

    @media (min-width:961px) {
        display: none;
    }
`;
