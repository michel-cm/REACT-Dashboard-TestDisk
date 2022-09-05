import * as C from "./styled";

import IconDeleteB from "../../assets/actions/deleteb.png";
import IconStarB from "../../assets/actions/favoritob.png";
import IconSeeB from "../../assets/actions/seeb.png";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { useEffect } from "react";

import { useCandidatesTests } from "../../hooks/useCandidatesTests";

import { formatDate } from "../../helpers/dateFilter"; 
import { useState } from "react";

export const TableAreaUsers = (props) => {
  const listCandidates = props.candidates;
  
  const { updateFavoriteCandidate } = useCandidatesTests(); 

    return (
    <C.Container>
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
                  <div className="cell">{candidate.predominancia ? candidate.predominancia : '-'}</div>
                  <div className="cell">{formatDate(candidate.tempoStart.toDate())}</div>
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
                    <C.AreaIcon  onClick={async () => await updateFavoriteCandidate(candidate.idUser, !candidate.favorite).then(()=>{
                         !candidate.favorite ? alert(`${candidate.name} salvo nos Favoritos`) : alert(`${candidate.name} removido dos Favoritos`)
                        })}>
                      <BsFillStarFill
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          opacity: 0.75,
                          color: `${candidate.favorite ? 'yellow' : '#F8F8F8'}`,
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
