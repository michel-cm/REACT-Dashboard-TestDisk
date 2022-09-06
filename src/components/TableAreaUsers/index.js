import * as C from "./styled";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { useEffect } from "react";

import { useCandidatesTests } from "../../hooks/useCandidatesTests";

import { formatDate } from "../../helpers/dateFilter";
import { useState } from "react";

import { ModalConfirm } from "../ModalConfirm";

export const TableAreaUsers = (props) => {
  const listCandidates = props.candidates;

  const { updateFavoriteCandidate } = useCandidatesTests();

  const [modalConfirmDelet, setModalonfirmDelet] = useState(false);

  const [ id, setId] = useState('')

  function getIdUser(id) {
    setId(id);
    setModalonfirmDelet(true)  
  }

  return (
    <C.Container>
      {modalConfirmDelet && <ModalConfirm setModal={setModalonfirmDelet} id={id}/> }
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

            {listCandidates.length > 0 &&
              listCandidates.map((candidate, index) => (
                <div className="row" key={index}>
                  <div className="cell">{candidate.name}</div>
                  <div className="cell">{candidate.email}</div>
                  <div className="cell">
                    {candidate.predominancia ? candidate.predominancia : "-"}
                  </div>
                  <div className="cell">
                    {formatDate(candidate.tempoStart.toDate())}
                  </div>
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
                    <C.AreaIcon                        
                        onClick={() => getIdUser(candidate.idUser)}
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
                          candidate.idUser,
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
                            candidate.favorite ? "#E2992B" : "#F8F8F8"
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
