import { createContext, useCallback, useEffect, useState } from "react";
import { Api } from "../services/Api";

export const ListQuestionsTestContext = createContext();

export const ListQuestionsTestContextProvider = ({ children }) => {
  const [testListQuestions, setTestListQuestions] = useState([]);

  const [testListQuestionsActive, setTestListQuestionsActive] = useState([]);

  const [testListQuestionsDisable, setTestListQuestionsDisable] = useState([]);

  const getAllQuestions = useCallback(async () => {
   await Api.getAllQuestions().then((data) => {
      setTestListQuestions(data);
    });
  }, []);

  useEffect(() => {
    if (testListQuestions.length === 0) {
      getAllQuestions();
    }
  }, [testListQuestions, getAllQuestions]);

  useEffect(() => {
    if (testListQuestions.length > 0) {
      setTestListQuestionsActive(
        testListQuestions.filter((question) => question.active === true)
      );
    }
  }, [testListQuestions]);

  useEffect(() => {
    if (testListQuestions.length > 0) {
      setTestListQuestionsDisable(
        testListQuestions.filter((question) => question.active === false)
      );
    }
  }, [testListQuestions]);

  return (
    <ListQuestionsTestContext.Provider
      value={{
        testListQuestions,
        getAllQuestions,

        testListQuestionsActive,
        testListQuestionsDisable
      }}
    >
      {children}
    </ListQuestionsTestContext.Provider>
  );
};
