import * as C from "./styled";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";

import { useCandidatesTests } from "../../hooks/useCandidatesTests";

import { formatDate } from "../../helpers/dateFilter";
import { useState } from "react";

import { ModalConfirm } from "../ModalConfirm";
import { CandidateViewTeste } from "../CandidateViewTeste";

export const TableAreaUsers = (props) => {
  const listCandidates = props.candidates;

  const { updateFavoriteCandidate } = useCandidatesTests();

  const [modalConfirmDelet, setModalConfirmDelet] = useState(false);

  const [modalCandidateView, setModalCandidateView] = useState(false);

  const [id, setId] = useState("");

  function handleConfirmDelet(candidateId) {
    setId(candidateId);
    setModalConfirmDelet(true);
  }

  function handleViewCandidate(candidateId) {
    setId(candidateId);
    setModalCandidateView(true);
  }

  return (
    <C.Container>
      {modalConfirmDelet && (
        <ModalConfirm setModal={setModalConfirmDelet} id={id} />
      )}
      {modalCandidateView && (
        <CandidateViewTeste setModal={setModalCandidateView} id={id} />
      )}
      <div className="container-table100">
        <div className="wrap-table100">
          <div className="table">
            <div className="row header">
              <div className="cell">Nome</div>
              <div className="cell">E-mail</div>
              <div className="cell">Cel</div>
              <div className="cell">Predominancia</div>
              <div className="cell">Data</div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>

            {listCandidates.length > 0 &&
              listCandidates.map((candidate, index) => (
                <div className="row" key={index}>
                  <div className="cell">
                    {candidate.name ? candidate.name : "---"}
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
                    <C.Candidate predo={candidate.predominancia}>
                      {candidate.predominancia
                        ? candidate.predominancia
                        : "---"}
                    </C.Candidate>
                  </div>
                  <div className="cell">
                    {candidate.tempoEnd
                      ? formatDate(candidate.tempoEnd.toDate())
                      : "---"}
                  </div>
                  <div className="cell ">
                    <C.AreaIcon
                      onClick={() => handleViewCandidate(candidate.email)}
                    >
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
                    <C.AreaIcon
                      onClick={() => handleConfirmDelet(candidate.email)}
                    >
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
                    <C.AreaIcon
                      onClick={async () =>
                        await updateFavoriteCandidate(
                          candidate.email,
                          !candidate.favorite
                        )
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
              ))}
          </div>
        </div>
      </div>
    </C.Container>
  );
};
