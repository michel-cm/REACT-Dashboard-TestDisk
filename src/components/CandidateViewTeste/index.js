import * as C from "./styled";

import ReactToPrint from "react-to-print";
import { useState } from "react";
import { BsFillStarFill, BsClock, BsHourglassBottom } from "react-icons/bs";
import { formatDate } from "../../helpers/dateFilter";
import { useCandidatesTests } from "../../hooks/useCandidatesTests";
import { useEffect } from "react";
import { PieChart } from "./PieChart";
import { useRef } from "react";

export const CandidateViewTeste = ({ setModal, id }) => {
  const componentRef = useRef();

  const getPageMargins = () => {
    return `@page { margin: ${"24px"} ${"0px"} ${"24px"} ${"0px"} !important; }`;
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const { getCandidate } = useCandidatesTests();

  const [candidate, setCandidate] = useState({});

  const { listCandidadtes, updateFavoriteCandidate } = useCandidatesTests();

  const [showPieChart, setShowPieChart] = useState(false);

  useEffect(() => {
    if (candidate.name) {
      return;
    }
    const result = getCandidate(id);
    setCandidate(result);
  }, [candidate]);

  useEffect(() => {
    if (listCandidadtes.length > 0) {
      setShowPieChart(true);
    }
  }, [listCandidadtes]);

  return (
    <C.Container>
      <C.AreaClose>
        <p onClick={handleCloseModal}>X</p>{" "}
      </C.AreaClose>
      <C.Modal ref={componentRef}>
        <style> {getPageMargins()} </style>

        <C.AreaTableUser>
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table">
                <div className="row header">
                  <div className="cell">Nome</div>
                  <div className="cell">Cidade</div>
                  <div className="cell">E-mail</div>
                  <div className="cell">Cel</div>
                  <div className="cell">Predominancia</div>
                  <div className="cell">Data </div>
                  <div className="cell"></div>
                </div>

                <div className="row">
                  <div className="cell">{candidate && candidate.name}</div>
                  <div className="cell">
                    {candidate.city ? candidate.city : "-"}
                  </div>
                  <div className="cell">
                    {" "}
                    {candidate.email ? (
                      <a
                        href={`mailto:${candidate.email}?body=${candidate.name}`}
                        target={"blank"}
                      >
                        {candidate.email}
                      </a>
                    ) : (
                      "---"
                    )}
                  </div>
                  <div className="cell">
                    {candidate.cel ? (
                      <a
                        href={`https://api.whatsapp.com/send?1=pt_br&phone=55${candidate.cel}`}
                        target={"blank"}
                      >
                        {candidate.cel}
                      </a>
                    ) : (
                      "---"
                    )}
                  </div>
                  <div className="cell">
                    {candidate.predominancia ? candidate.predominancia : "-"}
                  </div>
                  <div className="cell">
                    {" "}
                    {candidate.tempoEnd
                      ? formatDate(candidate.tempoEnd.toDate())
                      : "---"}
                  </div>

                  <div className="cell iconsLista">
                    <C.AreaIcon
                      onClick={async () =>
                        await updateFavoriteCandidate(
                          candidate.email,
                          !candidate.favorite
                        ).then(() => setModal(false))
                      }
                    >
                      <BsFillStarFill
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          opacity: 0.75,
                          color: `${
                            candidate.favorite ? "#E2992B" : "#a6a6a6"
                          }`,
                        }}
                      />
                    </C.AreaIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </C.AreaTableUser>

        {candidate.finalizado ? (
          <>
            <C.AreaValues>
              <C.Values>
                <div
                  style={{
                    backgroundColor: "#FC5A5A",
                  }}
                >
                  Dominante: {candidate.name && candidate.totalCadaLetra[0].a}
                </div>
                <div
                  style={{
                    backgroundColor: "#E2992B",
                  }}
                >
                  Influente: {candidate.name && candidate.totalCadaLetra[0].b}
                </div>
                <div
                  style={{
                    backgroundColor: "#3AB04D",
                  }}
                >
                  Estável: {candidate.name && candidate.totalCadaLetra[0].c}
                </div>
                <div
                  style={{
                    backgroundColor: "#2261BC",
                  }}
                >
                  Condescendente:{" "}
                  {candidate.name && candidate.totalCadaLetra[0].d}
                </div>
              </C.Values>
            </C.AreaValues>

            <C.AreaChart>
              {showPieChart && <PieChart candidate={candidate} />}
            </C.AreaChart>

            <C.AreaTimerTest className="pagebreak">
              <C.TitleAreaTimer>
                <BsClock /> <h4>Tempo do teste:</h4>
                <p>{`${candidate && candidate.timer / 60} minutos`}</p>
              </C.TitleAreaTimer>
              <C.TitleAreaTimerUsed>
                <BsHourglassBottom /> <h4>Tempo usado no teste:</h4>
                <p>{`${
                  candidate && (candidate.timerUsed / 60).toFixed(1)
                } minutos`}</p>
              </C.TitleAreaTimerUsed>
            </C.AreaTimerTest>
            <div className="pagebreakDisplayNone">
              <ReactToPrint
                trigger={() => (
                  <button
                    style={{
                      padding: "4px",
                    }}
                  >
                    Print test
                  </button>
                )}
                content={() => componentRef.current}
              />
            </div>
            <C.AreaQuestions className="pageQuestionsWrap">
              {candidate.name ? (
                candidate.questionsList[0].map((question, index) => (
                  <C.Question key={index}>
                    <C.Header>
                      <C.Number>
                        <span>{index + 1}</span>
                      </C.Number>
                      <C.Titulo>
                        <h3>{question.title}</h3>
                      </C.Titulo>
                    </C.Header>
                    <C.Table>
                      <C.AreaAnswer>
                        <C.TitleAnswer>{question.a}</C.TitleAnswer>
                        <C.AnswerValue
                          value={
                            candidate &&
                            candidate.valoresQuestionsUser[index]?.a
                              ? candidate.valoresQuestionsUser[index].a
                              : 0
                          }
                        >
                          {candidate && candidate.valoresQuestionsUser[index]?.a
                            ? candidate.valoresQuestionsUser[index].a
                            : "-"}
                        </C.AnswerValue>
                      </C.AreaAnswer>
                      <C.AreaAnswer>
                        <C.TitleAnswer>{question.b}</C.TitleAnswer>
                        <C.AnswerValue
                          value={
                            candidate &&
                            candidate.valoresQuestionsUser[index]?.b
                              ? candidate.valoresQuestionsUser[index].b
                              : 0
                          }
                        >
                          {candidate && candidate.valoresQuestionsUser[index]?.b
                            ? candidate.valoresQuestionsUser[index].b
                            : "-"}
                        </C.AnswerValue>
                      </C.AreaAnswer>
                      <C.AreaAnswer>
                        <C.TitleAnswer>{question.c}</C.TitleAnswer>
                        <C.AnswerValue
                          value={
                            candidate &&
                            candidate.valoresQuestionsUser[index]?.c
                              ? candidate.valoresQuestionsUser[index].c
                              : 0
                          }
                        >
                          {candidate && candidate.valoresQuestionsUser[index]?.c
                            ? candidate.valoresQuestionsUser[index].c
                            : "-"}
                        </C.AnswerValue>
                      </C.AreaAnswer>
                      <C.AreaAnswer>
                        <C.TitleAnswer>{question.d}</C.TitleAnswer>
                        <C.AnswerValue
                          value={
                            candidate &&
                            candidate.valoresQuestionsUser[index]?.d
                              ? candidate.valoresQuestionsUser[index].d
                              : 0
                          }
                        >
                          {candidate && candidate.valoresQuestionsUser[index]?.d
                            ? candidate.valoresQuestionsUser[index].d
                            : "-"}
                        </C.AnswerValue>
                      </C.AreaAnswer>
                    </C.Table>
                  </C.Question>
                ))
              ) : (
                <div>....</div>
              )}
            </C.AreaQuestions>
          </>
        ) : (
          <div
            style={{
              color: "red",
            }}
          >
            Teste não realizado
          </div>
        )}
      </C.Modal>
    </C.Container>
  );
};
