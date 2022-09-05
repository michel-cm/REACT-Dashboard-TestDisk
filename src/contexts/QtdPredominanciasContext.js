import { createContext, useEffect, useState } from "react";
import { useCandidatesTests } from "../hooks/useCandidatesTests";

export const QtdPredominanciasContext = createContext();

export const QtdPredominanciasContextProvider = ({ children }) => {
 
  const [predominancias, setPredominancias] = useState(null);

  let dominantes = 0;
  let influentes = 0;
  let estaveis = 0;
  let condescendentes = 0;

  const { listCandidadtes } = useCandidatesTests();

  const getPredominancias = () => {
    listCandidadtes.forEach((candidate, i) => {
      if (candidate.predominancia == "Dominante") {
        dominantes = dominantes + 1;
      }
      if (candidate.predominancia == "Influente") {
        influentes = influentes + 1;
      }
      if (candidate.predominancia == "Estavel") {
        estaveis = estaveis + 1;
      }
      if (candidate.predominancia == "Condescendente") {
        condescendentes = condescendentes + 1;
      }
    }); 
  };

  useEffect(() => {
    if ( listCandidadtes !== undefined) {
        getPredominancias();
        setPredominancias({
          dominantes : dominantes,
          estaveis : estaveis, 
          influentes:influentes,
          condescendentes : condescendentes
        })
    }
  }, [listCandidadtes]);



  return (
    <QtdPredominanciasContext.Provider
      value={{      
        predominancias,
      }}
    >
      {children}
    </QtdPredominanciasContext.Provider>
  );
};
