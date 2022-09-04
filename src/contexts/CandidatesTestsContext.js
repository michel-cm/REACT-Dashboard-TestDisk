import { createContext, useCallback, useEffect, useState } from "react";
import { Api } from "../services/Api";

export const CandidatesTestsContext = createContext();

export const CandidatesTestsContextProvider = ({ children }) => {
  const [listCandidadtes, setListCandidadtes] = useState([]);

  const getAllCandidatesAndTestes = useCallback(() => {
    Api.getAllCandidatesTests().then((data) => {      
      setListCandidadtes(data);
    });
  }, []);

  useEffect(() => {
    if (listCandidadtes.length === 0) {
      getAllCandidatesAndTestes();
    }
  }, [listCandidadtes]);  

  return (
    <CandidatesTestsContext.Provider
      value={{
        listCandidadtes,
        getAllCandidatesAndTestes,
      }}
    >
      {children}
    </CandidatesTestsContext.Provider>
  );
};
