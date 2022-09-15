import * as C from "./styled";

import { useState } from "react";
import { BsFillStarFill, BsClock, BsHourglassBottom } from "react-icons/bs";
import { formatDate } from "../../helpers/dateFilter";
import { useCandidatesTests } from "../../hooks/useCandidatesTests";
import { useEffect } from "react";
import { PieChart } from "./PieChart";

export const CandidateViewTeste = ({ setModal, id }) => {
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
      <C.Modal>
        <C.AreaClose>
          <p onClick={handleCloseModal}>X</p>{" "}
        </C.AreaClose>
        <C.Title></C.Title>

        <C.AreaTableUser>
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table">
                <div className="row header">
                  <div className="cell">Nome</div>
                  <div className="cell">E-mail</div>
                  <div className="cell">Predominancia</div>
                  <div className="cell">Data </div>
                  <div className="cell"></div>
                </div>

                <div className="row">
                  <div className="cell">{candidate && candidate.name}</div>
                  <div className="cell">{candidate && candidate.email}</div>
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
                <div>A = {candidate.name && candidate.totalCadaLetra[0].a}</div>
                <div>B = {candidate.name && candidate.totalCadaLetra[0].b}</div>
                <div>C = {candidate.name && candidate.totalCadaLetra[0].c}</div>
                <div>D = {candidate.name && candidate.totalCadaLetra[0].d}</div>
              </C.Values>
            </C.AreaValues>

            <C.AreaChart>
              {showPieChart && <PieChart candidate={candidate} />}
            </C.AreaChart>

            <C.AreaTimerTest>
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

            <C.AreaQuestions>
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
                          value={candidate.valoresQuestionsUser[index].a}
                        >
                          {candidate && candidate.valoresQuestionsUser[index].a}
                        </C.AnswerValue>
                      </C.AreaAnswer>
                      <C.AreaAnswer>
                        <C.TitleAnswer>{question.b}</C.TitleAnswer>
                        <C.AnswerValue
                          value={candidate.valoresQuestionsUser[index].b}
                        >
                          {candidate && candidate.valoresQuestionsUser[index].b}
                        </C.AnswerValue>
                      </C.AreaAnswer>
                      <C.AreaAnswer>
                        <C.TitleAnswer>{question.c}</C.TitleAnswer>
                        <C.AnswerValue
                          value={candidate.valoresQuestionsUser[index].c}
                        >
                          {candidate && candidate.valoresQuestionsUser[index].c}
                        </C.AnswerValue>
                      </C.AreaAnswer>
                      <C.AreaAnswer>
                        <C.TitleAnswer>{question.d}</C.TitleAnswer>
                        <C.AnswerValue
                          value={candidate.valoresQuestionsUser[index].d}
                        >
                          {candidate && candidate.valoresQuestionsUser[index].d}
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
