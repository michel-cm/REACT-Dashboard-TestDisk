import * as C from "./styled";
import iconArrowRight from "../../assets/actions/arrowRight.png";
import plusWhite from "../../assets/actions/pluswhite.png";

import { Card } from "./Card";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";

import { useEffect, useState } from "react";

import { useListQuestionsTest } from "../../hooks/useListQuestionsTest";

export const Questionario = () => {
  const { testListQuestions, getAlQuestions } = useListQuestionsTest();

  const [areaQuestionsActiveShow, setAreaQuestionsActiveShow] = useState(true);
  const [areaQuestionsDisableShow, setAreaQuestionsDisableShow] =
    useState(true);

  function handleShowAreaQuestionsActive() {
    setAreaQuestionsActiveShow(!areaQuestionsActiveShow);
  }

  function handleShowAreaQuestionsDisable() {
    setAreaQuestionsDisableShow(!areaQuestionsDisableShow);
  }

  console.log(testListQuestions);

  return (
    <C.Container className="MainContentPadingAndMargin">
      <C.AreaCardsResume>
        

       <Card title={"Total Questões"} color={"#2261BC"} value={25}/>
       <Card title={"Questões Ativas"} color={"#3AB04D"} value={20}/>
       <Card title={"Questões Pausadas"} color={"#FC5A5A"} value={5}/>
      </C.AreaCardsResume>

      {/* ---------------------------------------- */}

      <C.AreaSearchAndAdd>
      <Button />

        <Search placeholder="Digite alguma questão"/>
      </C.AreaSearchAndAdd>

      {/* ---------------------------------------- */}
      <C.TestArea>
        <C.AreaAccordion onClick={handleShowAreaQuestionsActive}>
          <h3>Questões Ativas</h3>
          <C.ArrowIcon src={iconArrowRight} show={areaQuestionsActiveShow} />
        </C.AreaAccordion>
        <C.TesteListQuestions>
          {areaQuestionsActiveShow ? (
            testListQuestions.map((question, index) => {
              return (
                <C.CardQuestion key={index}>
                  <C.AreaTitle>
                    <h3>
                      {index + 1} - {question.title}
                    </h3>
                  </C.AreaTitle>
                  <p>{question.a}</p>
                  <p>{question.b}</p>
                  <p>{question.c}</p>
                  <p>{question.d}</p>
                </C.CardQuestion>
              );
            })
          ) : (
            <div>...</div>
          )}
        </C.TesteListQuestions>
      </C.TestArea>

      <C.TestAreaQuestionsDisable>
        <C.AreaAccordion onClick={handleShowAreaQuestionsDisable}>
          <h3>Questões Desativadas</h3>
          <C.ArrowIcon src={iconArrowRight} show={areaQuestionsDisableShow} />
        </C.AreaAccordion>
        <C.TesteListQuestions>
          {areaQuestionsDisableShow ? (
            testListQuestions.map((question, index) => {
              return (
                <C.CardQuestion key={index}>
                  <C.AreaTitle>
                    <h3>
                      {index + 1} - {question.title}
                    </h3>
                  </C.AreaTitle>
                  <p>{question.a}</p>
                  <p>{question.b}</p>
                  <p>{question.c}</p>
                  <p>{question.d}</p>
                </C.CardQuestion>
              );
            })
          ) : (
            <div>...</div>
          )}
        </C.TesteListQuestions>
      </C.TestAreaQuestionsDisable>
    </C.Container>
  );
};
