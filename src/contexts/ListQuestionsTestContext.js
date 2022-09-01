import { createContext, useCallback, useEffect, useState } from "react";
import { Api } from "../services/Api";

export const ListQuestionsTestContext = createContext();

export const ListQuestionsTestContextProvider = ({ children }) => {
  const [testListQuestions, setTestListQuestions] = useState([]);

  const getAllQuestions = useCallback(() => {    
     Api.getAllQuestions().then((data) => {
      console.log('setando questoes')
      setTestListQuestions(data);
    });
  },[])

  useEffect(() => {
    if(testListQuestions.length === 0){
        getAllQuestions();
    }
  }, [testListQuestions, getAllQuestions]);

   return (
    <ListQuestionsTestContext.Provider value={{
        testListQuestions,
        getAllQuestions      
        }}>
      {children}
    </ListQuestionsTestContext.Provider>
  );
};
