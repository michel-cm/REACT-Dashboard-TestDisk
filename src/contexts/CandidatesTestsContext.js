import { createContext, useCallback, useEffect, useState } from "react";
import { Api } from "../services/Api";

export const CandidatesTestsContext = createContext();

export const CandidatesTestsContextProvider = ({ children }) => {
  const [listCandidadtes, setListCandidadtes] = useState([]);

  const [ListCandidatesFavorites, setListCandidatesFavorites] = useState(
    listCandidadtes.length > 0 &&
      listCandidadtes.filter((candidate) => candidate.favorite === true)
  );

  const getAllCandidatesAndTestes = useCallback(() => {
    Api.getAllCandidatesTests().then((data) => {
      setListCandidadtes(
        data.filter((candidato) => candidato.predominancia !== "")
      );
    });
  }, []);

  useEffect(() => {
    if (listCandidadtes.length === 0) {
      getAllCandidatesAndTestes();
    }
  }, []);

  async function updateFavoriteCandidate(idUser, value) {
    await Api.updateFavoriteCandidate(idUser, value).then(async () => {
      await getAllCandidatesAndTestes();
    });
  }

  useEffect(() => {
    if (listCandidadtes.length > 0) {
      setListCandidatesFavorites(
        listCandidadtes.filter((candidate) => candidate.favorite === true)
      );
    }
  }, [listCandidadtes]);

  const getCandidate = (idSearch) => {
    const candidate = listCandidadtes.filter(
      (candidate, i) => candidate.idUser == idSearch
    );
    return candidate[0];
  };

  return (
    <CandidatesTestsContext.Provider
      value={{
        listCandidadtes,
        getAllCandidatesAndTestes,

        getCandidate,

        updateFavoriteCandidate,
        ListCandidatesFavorites,
      }}
    >
      {children}
    </CandidatesTestsContext.Provider>
  );
};
