import { useState } from "react";
import { Api } from "../../../services/Api";
import * as C from "./styled";

import { useListQuestionsTest } from "../../../hooks/useListQuestionsTest";
import { useEffect } from "react";

export const ModalUpdateQuestion = ({ setModal, updateListQuestions, id }) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const { testListQuestions, getQuestion } = useListQuestionsTest();

  const [title, setTitle] = useState("");
  const [alternativaA, setAlternativaA] = useState("");
  const [alternativaB, setAlternativaB] = useState("");
  const [alternativaC, setAlternativaC] = useState("");
  const [alternativaD, setAlternativaD] = useState("");
  const [alternativaActive, setAlternativaaActive] = useState(true);

  const [load, setLoad] = useState(false);

  const result = getQuestion(id);


  useEffect(() => {
    if (testListQuestions.length > 0) {     
      setTitle(result[0].title);
      setAlternativaA(result[0].a);
      setAlternativaB(result[0].b);
      setAlternativaC(result[0].c);
      setAlternativaD(result[0].d);
      setAlternativaaActive(result[0].active);
    }
  }, [testListQuestions]);

  console.log(id)

  async function handleUpdateQuestion() {
    setLoad(true);

    const question = {
      title,
      a: alternativaA,
      b: alternativaB,
      c: alternativaC,
      d: alternativaD,
      active: alternativaActive,
    };

    await Api.updateQuestion(question, id).then(async () => {
      console.log(id)
      await updateListQuestions().then(() => {
        setLoad(false);
        setModal(false);
      });
    });
  }

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <p onClick={handleCloseModal}>X</p>{" "}
        </C.AreaClose>
        <C.Title>Atualizar Questão</C.Title>

        <form>
          <textarea
            type="text"
            rows={5}
            required
            placeholder="Titulo da questão"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            type="text"
            rows={5}
            required
            placeholder="Alternativa A"
            onChange={(e) => setAlternativaA(e.target.value)}
            value={alternativaA}
          />
          <textarea
            type="text"
            rows={5}
            required
            placeholder="Alternativa B"
            onChange={(e) => setAlternativaB(e.target.value)}
            value={alternativaB}
          />
          <textarea
            type="text"
            rows={5}
            required
            placeholder="Alternativa C"
            onChange={(e) => setAlternativaC(e.target.value)}
            value={alternativaC}
          />

          <textarea
            type="text"
            rows={5}
            required
            placeholder="Alternativa D"
            onChange={(e) => setAlternativaD(e.target.value)}
            value={alternativaD}
          />

          <label>Questão Ativa ?</label>

          <select
            onChange={(e) =>
              e.target.value === "nao"
                ? setAlternativaaActive(false)
                : setAlternativaaActive(true)
            }
          >
            {result[0].active ? (
              <>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </>
            ) : (
              <>
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
              </>
            )}
          </select>
        </form>

        <C.ButtonSubmit onClick={handleUpdateQuestion}>
          {load ? "Atualizando ..." : "Atualizar Questão"}
        </C.ButtonSubmit>
      </C.Modal>
    </C.Container>
  );
};
