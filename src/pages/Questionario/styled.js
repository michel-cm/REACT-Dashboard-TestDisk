import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    padding: 40px 24px;
`

export const AreaCardsResume = styled.div`   
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const CardTotalQuestions = styled.div`
    background-color: #333;    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p {
        margin-right: 30px;  
        font-size: 16px ;
    }

    span {
        font-size: 20px;
        font-weight: bold;
        margin: 0px 30px;
    }

    &&::before {
        content: '';        
        width: 6px;
        height: 120px;
        background-color: #2261BC;
        margin-right: 30px;
    }
`;


export const LineCard2 = styled.div`
    height:32px;
    width: 1px;
    background-color: #FFF;
`;


export const CardActiveQuestions = styled.div``;

export const CardDisableQuestions = styled.div``;

export const AreaAddQuestion = styled.div``;

export const AreaSearch = styled.div``;

export const TestArea = styled.div`
     
    margin-top: 60px;
`;

export const TesteListQuestions = styled.div``;



