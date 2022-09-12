import { createContext, useCallback, useEffect, useState } from "react";
import { useConfigs } from "../hooks/useConfigs";
import { Api } from "../services/Api";

export const CandidatesTestsContext = createContext();

export const CandidatesTestsContextProvider = ({ children }) => {
  const [listCandidadtes, setListCandidadtes] = useState([]);

  const [ListCandidatesFavorites, setListCandidatesFavorites] = useState(
    listCandidadtes.length > 0 &&
      listCandidadtes.filter((candidate) => candidate.favorite === true)
  );


  function getCandidatesFinallyCount() {
    if (listCandidadtes.length > 0) {
      const list = listCandidadtes.filter((candidate) => {
        return candidate.finalizado == true;
      });
      return list.length;
    }
  }

  const { timer } = useConfigs();

  const getAllCandidatesAndTestes = useCallback(() => {
    Api.getAllCandidatesTests().then((data) => {
      setListCandidadtes(data);
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

  async function addNewCandidate(email, listQuestions) {
    await Api.addNewCandidateForTest(email, listQuestions, timer).catch((err) =>
      console.log(err)
    );
  }

  return (
    <CandidatesTestsContext.Provider
      value={{
        listCandidadtes,
        getAllCandidatesAndTestes,

        getCandidate,

        updateFavoriteCandidate,
        ListCandidatesFavorites,

        addNewCandidate,

        getCandidatesFinallyCount,
      }}
    >
      {children}
    </CandidatesTestsContext.Provider>
  );
};
