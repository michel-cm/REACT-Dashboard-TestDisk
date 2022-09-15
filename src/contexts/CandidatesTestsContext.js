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

  function getCandidatesFinally() {
    if (listCandidadtes.length > 0) {
      const list = listCandidadtes.filter((candidate) => {
        return candidate.finalizado == true;
      });
      return list;
    }
  }

  function getTimerMediaUsed() {
    if (listCandidadtes.length > 0) {
      const listCandidadtesFinally = getCandidatesFinally()
      const result = listCandidadtesFinally
        .map((item) => {
          return item.timerUsed / 60;
        })
        .reduce((ac, value) => {
          return ac + value;
        });
      return (result/listCandidadtesFinally.length).toFixed(1);
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
      getTimerMediaUsed();
    }
  }, []);

  async function updateFavoriteCandidate(emailUser, value) {
    await Api.updateFavoriteCandidate(emailUser, value).then(async () => {
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

        getTimerMediaUsed,
      }}
    >
      {children}
    </CandidatesTestsContext.Provider>
  );
};
