import * as C from "./styled";
import iconArrowRight from "../../assets/actions/arrowRight.png";
import plusWhite from "../../assets/actions/pluswhite.png";

import { Card } from "./Card";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";

import { useEffect, useState } from "react";

import { useListQuestionsTest } from "../../hooks/useListQuestionsTest";
import { Accordion } from "../../components/Accordion";

export const Questionario = () => {
  const { testListQuestions, getAlQuestions } = useListQuestionsTest();

  const [areaQuestionsActiveShow, setAreaQuestionsActiveShow] = useState(true);
  const [areaQuestionsDisableShow, setAreaQuestionsDisableShow] =
    useState(true);

  return (
    <C.Container className="MainContentPadingAndMargin">
      <C.AreaCardsResume>
        <Card title={"Total Questões"} color={"#2261BC"} value={25} />
        <Card title={"Questões Ativas"} color={"#3AB04D"} value={20} />
        <Card title={"Questões Pausadas"} color={"#FC5A5A"} value={5} />
      </C.AreaCardsResume>

      {/* ---------------------------------------- */}

      <C.AreaSearchAndAdd>     

        <Search placeholder="Digite alguma questão" />
      </C.AreaSearchAndAdd>

      {/* ---------------------------------------- */}
      <C.TestArea>
        <Accordion
          color="#3AB04D"
          state={areaQuestionsActiveShow}
          setState={setAreaQuestionsActiveShow}
          title="Questões Desativadas"
        />
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
        <Accordion
          color="#FC5A5A"
          state={areaQuestionsDisableShow}
          setState={setAreaQuestionsDisableShow}
          title="Questões Desativadas"
        />

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
