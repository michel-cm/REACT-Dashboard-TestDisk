import styled  from "styled-components";

export const Container = styled.div`
width: 100%;
height: fit-content;
`

export const Titulo = styled.h1`

`;

export const AreaCardsResume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 20px;
  width: 100%;
`;

export const AreaSearchAndAdd = styled.div`
  padding: 80px 0px 30px 0px;
  display: flex;
  align-items: center;

  img {
    margin-left: -50px;
    width: 20px;
  }
  img:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

