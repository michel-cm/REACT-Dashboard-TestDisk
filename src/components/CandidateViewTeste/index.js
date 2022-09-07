import * as C from "./styled";

import { useState } from "react";
import { BsFillEyeFill, BsFillStarFill, BsFillTrashFill } from "react-icons/bs";
import { formatDate } from "../../helpers/dateFilter";

export const CandidateViewTeste = ({ setModal }) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const [candidate, setCandidate] = useState({
    name: "michel correa",
    email: "michelcm13@gmail.com",
    predominancia: "dominante",
    favorite: false,
    tempoStart: new Date(),
  });

  console.log(candidate);

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
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>

                <div className="row">
                  <div className="cell">{candidate && candidate.name}</div>
                  <div className="cell">{candidate && candidate.email}</div>
                  <div className="cell">
                    {candidate.predominancia ? candidate.predominancia : "-"}
                  </div>
                  <div className="cell">20/08/2022</div>
                  <div className="cell ">
                    <C.AreaIcon>
                      <BsFillEyeFill
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          opacity: 0.75,
                        }}
                      />
                    </C.AreaIcon>
                  </div>
                  <div className="cell iconsLista">
                    <C.AreaIcon>
                      <BsFillTrashFill
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          opacity: 0.75,
                        }}
                      />
                    </C.AreaIcon>
                  </div>
                  <div className="cell iconsLista">
                    <C.AreaIcon>
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
            <div>A = 8</div>
            <div>B = 6</div>
            <div>C = 4</div>
            <div>D = 2</div>
          </C.Values>
        </C.AreaValues>

        <C.AreaQuestions>
          <C.Question>
            <C.Header>
              <C.Number>
                <span>1</span>
              </C.Number>
              <C.Titulo>
                <h3>
                  Em um restaurante. Estou esperando uma mesa e o garçom me diz
                  que em 10 minutos terei uma mesa, porém passam 20 minutos:
                </h3>
              </C.Titulo>
            </C.Header>
            <C.Table>
              <C.AreaAnswer>
                <C.TitleAnswer>
                  Me aborreço e digo ao garçom que já se passou o dobro do
                  tempo, e lhe informo que se demorar muito irei embora e eles
                  perderão um cliente.
                </C.TitleAnswer>
                <C.AnswerValue>3</C.AnswerValue>
              </C.AreaAnswer>
              <C.AreaAnswer>
                <C.TitleAnswer>
                  Me aborreço e digo ao garçom que já se passou o dobro do
                  tempo, e lhe informo que se demorar muito irei embora e eles
                  perderão um cliente.
                </C.TitleAnswer>
                <C.AnswerValue>3</C.AnswerValue>
              </C.AreaAnswer>
              <C.AreaAnswer>
                <C.TitleAnswer>
                  Me aborreço e digo ao garçom que já se passou o dobro do
                  tempo, e lhe informo que se demorar muito irei embora e eles
                  perderão um cliente.
                </C.TitleAnswer>
                <C.AnswerValue>3</C.AnswerValue>
              </C.AreaAnswer>
              <C.AreaAnswer>
                <C.TitleAnswer>
                  Me aborreço e digo ao garçom que já se passou o dobro do
                  tempo, e lhe informo que se demorar muito irei embora e eles
                  perderão um cliente.
                </C.TitleAnswer>
                <C.AnswerValue>3</C.AnswerValue>
              </C.AreaAnswer>
            </C.Table>
          </C.Question>

        </C.AreaQuestions>
      </C.Modal>
    </C.Container>
  );
};
