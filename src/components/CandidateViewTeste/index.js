import * as C from "./styled";

import { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { formatDate } from "../../helpers/dateFilter";
import { useCandidatesTests } from "../../hooks/useCandidatesTests";
import { useEffect } from "react";

export const CandidateViewTeste = ({ setModal, id }) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { getCandidate } = useCandidatesTests();

  const [candidate, setCandidate] = useState({});

  const { updateFavoriteCandidate } = useCandidatesTests();

  useEffect(() => {
    if (candidate.name) {
      return;
    }
    const result = getCandidate(id);
    setCandidate(result);
  }, [candidate]);

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
                    {candidate.name &&
                      formatDate(candidate.tempoStart.toDate())}
                  </div>

                  <div className="cell iconsLista">
                    <C.AreaIcon
                      onClick={async () =>
                        await updateFavoriteCandidate(
                          candidate.idUser,
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

        <C.AreaValues>
          <C.Values>
            <div>A = {candidate.name && candidate.totalCadaLetra[0].a}</div>
            <div>B = {candidate.name && candidate.totalCadaLetra[0].b}</div>
            <div>C = {candidate.name && candidate.totalCadaLetra[0].c}</div>
            <div>D = {candidate.name && candidate.totalCadaLetra[0].d}</div>
          </C.Values>
        </C.AreaValues>

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
                    <C.AnswerValue>3</C.AnswerValue>
                  </C.AreaAnswer>
                  <C.AreaAnswer>
                    <C.TitleAnswer>{question.b}</C.TitleAnswer>
                    <C.AnswerValue>3</C.AnswerValue>
                  </C.AreaAnswer>
                  <C.AreaAnswer>
                    <C.TitleAnswer>{question.c}</C.TitleAnswer>
                    <C.AnswerValue>3</C.AnswerValue>
                  </C.AreaAnswer>
                  <C.AreaAnswer>
                    <C.TitleAnswer>{question.d}</C.TitleAnswer>
                    <C.AnswerValue>3</C.AnswerValue>
                  </C.AreaAnswer>
                </C.Table>
              </C.Question>
            ))
          ) : (
            <div>....</div>
          )}
        </C.AreaQuestions>
      </C.Modal>
    </C.Container>
  );
};
