import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: ${props => props.theme.colors.primary};
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 40px;
    width: 6vw;

    a {
        color: #FFF;
    }

    @media (max-width:961px) {
        display: none;
    }
`;
