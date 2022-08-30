import * as C from "./styled";

import { useEffect, useState } from "react";

import { useListQuestionsTest } from "../../hooks/useListQuestionsTest";

export const Questionario = () => {
  const { testListQuestions, getAlQuestions } = useListQuestionsTest();

  console.log(testListQuestions);

  return (
    <C.Container>

    <C.AreaCardsResume>
      <C.CardTotalQuestions>       
        <p>Total Questões</p>
          <C.LineCard2>            
          </C.LineCard2>
          <span>26</span>
      </C.CardTotalQuestions>
      <C.CardTotalQuestions>       
        <p>Total Questões</p>
          <C.LineCard2>            
          </C.LineCard2>
          <span>26</span>
      </C.CardTotalQuestions>
      <C.CardTotalQuestions>       
        <p>Total Questões</p>
          <C.LineCard2>            
          </C.LineCard2>
          <span>26</span>
      </C.CardTotalQuestions>
    
    </C.AreaCardsResume>

    <C.AreaAddQuestion>
      
    </C.AreaAddQuestion>

    <C.AreaSearch>

    </C.AreaSearch>

      <C.TestArea>
        <C.TesteListQuestions>
          {testListQuestions.map((question, index) => {
            return (
              <div key={index}>
                <h1>{question.title}</h1>
                <p>{question.a}</p>
                <p>{question.b}</p>
                <p>{question.c}</p>
                <p>{question.d}</p>
              </div>
            );
          })}
        </C.TesteListQuestions>
      </C.TestArea>
    </C.Container>
  );
};
