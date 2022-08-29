import * as C from "./styled";

import { useEffect, useState } from "react";

import { useListQuestionsTest } from "../../hooks/useListQuestionsTest";


export const Questionario = () => {
  const { testListQuestions, getAlQuestions } = useListQuestionsTest();

  console.log(testListQuestions);

  return (
    <C.Container>
    
      <C.Content>
        <C.TestArea>
          <C.TesteListQuestions>
              {testListQuestions.map((question, index) => {
                  return(
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
      </C.Content>
    </C.Container>
  );
};
