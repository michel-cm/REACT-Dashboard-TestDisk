import * as C from "./styled";

import { BsListUl } from "react-icons/bs";

import { Card } from "./Card";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";

import { useState } from "react";

import { useListQuestionsTest } from "../../hooks/useListQuestionsTest";
import { Accordion } from "../../components/Accordion";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";

import { ModalAddNewQuestion } from "./ModalAddNewQuestion";
import { ModalSetings } from "./ModalSetings";
import { ModalUpdateQuestion } from "./ModalUpdateQuestion";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Questionario = () => {
  const {
    testListQuestions,
    testListQuestionsActive,
    testListQuestionsDisable,
    getAllQuestions,
  } = useListQuestionsTest();

  const [areaQuestionsActiveShow, setAreaQuestionsActiveShow] = useState(true);
  const [areaQuestionsDisableShow, setAreaQuestionsDisableShow] =
    useState(true);

  const [modalNewQuestion, setModalNewQuestion] = useState(false);
  const [modalSetings, setModalSetings] = useState(false);
  const [modalUpdateQuestionShow, setModalUpdateQuestionShow] = useState(false);

  const [search, setSearch] = useState("");

  const [idQuestion, setIdQuestion] = useState("");

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  function handleModalNewQuestion() {
    setModalNewQuestion(true);
  }

  function handleModalUpdateQuestion() {
    setModalUpdateQuestionShow(true);
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
        {modalSetings && (
          <ModalSetings
            setModal={setModalSetings}
            idQuestion={idQuestion}
            fnUpdateListQuestion={getAllQuestions}
            setModalUpdateQuestion={setModalUpdateQuestionShow}
          />
        )}

        {modalNewQuestion && (
          <ModalAddNewQuestion
            setModal={setModalNewQuestion}
            updateListQuestions={getAllQuestions}
          />
        )}
        {modalUpdateQuestionShow && (
          <ModalUpdateQuestion
            id={idQuestion.id}
            setModal={setModalUpdateQuestionShow}
            updateListQuestions={getAllQuestions}
          />
        )}
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
          <Button
            title={"Adicionar nova questão"}
            fn={handleModalNewQuestion}
          />
          <Search
            placeholder="Digite alguma questão"
            state={search}
            setSearch={setSearch}
          />
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
                          <C.AreaSetingsQuestion
                            onClick={() => {
                              setIdQuestion({
                                id: question.id,
                                index: index,
                              });
                              setModalSetings(true);
                            }}
                          >
                            <BsListUl
                              style={{
                                fontSize: "20px",
                              }}
                            />
                          </C.AreaSetingsQuestion>
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
                          <C.AreaSetingsQuestion
                            onClick={() => {
                              setIdQuestion({
                                id: question.id,
                                index: index,
                              });
                              setModalSetings(true);
                            }}
                          >
                            <BsListUl
                              style={{
                                fontSize: "20px",
                              }}
                            />
                          </C.AreaSetingsQuestion>
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
