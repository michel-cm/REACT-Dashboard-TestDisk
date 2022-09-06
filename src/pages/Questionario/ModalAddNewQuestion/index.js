import { useState } from "react";
import { Api } from "../../../services/Api";
import * as C from "./styled";

export const ModalAddNewQuestion = ({ setModal, updateListQuestions }) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const [title, setTitle] = useState("");
  const [alternativaA, setAlternativaA] = useState("");
  const [alternativaB, setAlternativaB] = useState("");
  const [alternativaC, setAlternativaC] = useState("");
  const [alternativaD, setAlternativaD] = useState("");
  const [alternativaActive, setAlternativaaActive] = useState(true);

  const [load, setLoad] = useState(false);
 
  async function handleSubmitNewQuestion() {
    setLoad(true);
    if (
      title === "" ||
      alternativaA === "" ||
      alternativaB === "" ||
      alternativaC === "" ||
      alternativaD === ""
    ) {
      alert("Não deixa campos em branco");
      setLoad(false);
      return;
    }

    const question = {
      title,
      a: alternativaA,
      b: alternativaB,
      c: alternativaC,
      d: alternativaD,
      active: alternativaActive,
    };

    await Api.addNewQuestion(question).then(async () => {
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
        <C.Title>Nova Questão</C.Title>

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
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </form>

        <C.ButtonSubmit onClick={handleSubmitNewQuestion}>
         {load ? 'Salvando ...' : 'Salvar Questão'} 
        </C.ButtonSubmit>
      </C.Modal>
    </C.Container>
  );
};
