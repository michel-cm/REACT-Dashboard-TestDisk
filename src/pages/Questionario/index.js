import * as C from "./styled";
import IconSearch from '../../assets/actions/search.png'
import iconArrowRight from '../../assets/actions/arrowRight.png'

import { useEffect, useState } from "react";

import { useListQuestionsTest } from "../../hooks/useListQuestionsTest";

export const Questionario = () => {
  const { testListQuestions, getAlQuestions } = useListQuestionsTest();

  const [ areaQuestionsActiveShow, setAreaQuestionsActiveShow] = useState(true);

  function handleShowAreaQuestionsActive() {
      setAreaQuestionsActiveShow(!areaQuestionsActiveShow)
  }

  console.log(testListQuestions);

  return (
    <C.Container>
      <C.AreaCardsResume>
        <C.CardTotalQuestions value={"#2261BC"}>
          <div>
            <p>Total Questões</p>
            <C.LineCard2></C.LineCard2>
            <span>26</span>
          </div>
        </C.CardTotalQuestions>
        <C.CardTotalQuestions value={"#3AB04D"}>
          <div>
            <p>Ativas</p>
            <C.LineCard2></C.LineCard2>
            <span>26</span>
          </div>
        </C.CardTotalQuestions>
        <C.CardTotalQuestions value={"#FC5A5A"}>
          <div>
            <p>Desativadas</p>
            <C.LineCard2></C.LineCard2>
            <span>26</span>
          </div>
        </C.CardTotalQuestions>
      </C.AreaCardsResume>

      {/* ---------------------------------------- */}



      <C.AreaSearchAndAdd>
        <button className="button">ADICIONAR NOVA QUESTÃO</button>

        <C.SearchInput placeholder="Digite alguma questão" /><img src={IconSearch} />
      </C.AreaSearchAndAdd>



      {/* ---------------------------------------- */}
      <C.TestArea>
        <C.AreaAccordion onClick={handleShowAreaQuestionsActive}>
            <h3>Questões Ativas</h3> 
            <C.ArrowIcon src={iconArrowRight} show={areaQuestionsActiveShow} />            
        </C.AreaAccordion>
        <C.TesteListQuestions>
          
          {areaQuestionsActiveShow ?          
          testListQuestions.map((question, index) => {
            return (

              <div key={index}>
                <h1>{question.title}</h1>
                <p>{question.a}</p>
                <p>{question.b}</p>
                <p>{question.c}</p>
                <p>{question.d}</p>
              </div>
            );
          }) : <div>...</div> }
        </C.TesteListQuestions>
      </C.TestArea>
    </C.Container>
  );
};
