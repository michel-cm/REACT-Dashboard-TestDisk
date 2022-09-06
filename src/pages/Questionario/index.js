import * as C from "./styled";
import iconArrowRight from "../../assets/actions/arrowRight.png";
import plusWhite from "../../assets/actions/pluswhite.png";

import { Card } from "./Card";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";

import { useEffect, useState } from "react";

import { useListQuestionsTest } from "../../hooks/useListQuestionsTest";
import { Accordion } from "../../components/Accordion";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { PieChart } from "../../components/PieChart";
import { ModalAddNewQuestion } from "../../components/ModalAddNewQuestion";

export const Questionario = () => {
  const {
    testListQuestions,
    testListQuestionsActive,
    testListQuestionsDisable,
    getAllQuestions
  } = useListQuestionsTest();

  const [areaQuestionsActiveShow, setAreaQuestionsActiveShow] = useState(true);
  const [areaQuestionsDisableShow, setAreaQuestionsDisableShow] =
    useState(true);

  const [modalNewQuestion, setModalNewQuestion] = useState(false);

  const [search, setSearch] = useState("");

  function handleModalNewQuestion() {
    setModalNewQuestion(true);
  }

  const filteredListQuestions =
    search.length > 0
      ? testListQuestions.filter((question) =>
          question.title.toLowerCase().includes(search)
        )
      : [];

  return (
    <C.Container>
      <SideBar />
      <Header />
      <C.MainContent className="MainContentPadingAndMargin">
        { modalNewQuestion && <ModalAddNewQuestion setModal={setModalNewQuestion} updateListQuestions={ getAllQuestions}/>}
        <C.AreaCardsResume>
          <Card
            title={"Total Questões"}
            color={"#2261BC"}
            value={testListQuestions && testListQuestions.length}
          />
          <Card
            title={"Questões Ativas"}
            color={"#3AB04D"}
            value={testListQuestionsActive && testListQuestionsActive.length}
          />
          <Card
            title={"Questões Pausadas"}
            color={"#FC5A5A"}
            value={testListQuestionsDisable && testListQuestionsDisable.length}
          />
        </C.AreaCardsResume>

        {/* ---------------------------------------- */}

        <C.AreaSearchAndAdd>
          <Search
            placeholder="Digite alguma questão"
            state={search}
            setSearch={setSearch}
          />
          <Button title={"Adicionar nova questão"} fn={handleModalNewQuestion} /> 
        </C.AreaSearchAndAdd>

        {search.length > 0 ? (
          <>
            <C.TestArea>
            <C.AreaFiltered>
              <h3>Filtrando</h3>
              <div></div>
            </C.AreaFiltered>
              <div>
                {filteredListQuestions.map((question, index) => {
                  return (
                    <C.CardQuestion key={index}>
                      <C.AreaTitle>
                        <h3 style={{color: question.active ? "#F8F8F8" : "#D04E4E"}}>
                          {index + 1} - {question.title}
                        </h3>
                      </C.AreaTitle>
                      <p>{question.a}</p>
                      <p>{question.b}</p>
                      <p>{question.c}</p>
                      <p>{question.d}</p>
                    </C.CardQuestion>
                  );
                })}
              </div>
            </C.TestArea>
          </>
        ) : (
          <>
            <C.TestArea>
              <Accordion
                color="#3AB04D"
                state={areaQuestionsActiveShow}
                setState={setAreaQuestionsActiveShow}
                title="Questões Ativas"
              />
              <C.TesteListQuestions>
                {areaQuestionsActiveShow ? (
                  testListQuestionsActive.map((question, index) => {
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
                  testListQuestionsDisable.map((question, index) => {
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
          </>
        )}
      </C.MainContent>
    </C.Container>
  );
};
