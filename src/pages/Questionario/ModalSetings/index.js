import { Api } from "../../../services/Api";
import * as C from "./styled";

import {
  BsPencilSquare,
  BsFillTrashFill,
  BsFillBagXFill,
} from "react-icons/bs";

export const ModalSetings = ({
  setModal,
  idQuestion,
  fnUpdateListQuestion,
  setModalUpdateQuestion,
}) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  async function deleteQuestion() {
    await Api.deleteQuestion(idQuestion.id).then(async () => {
      await fnUpdateListQuestion();
      setModal(false);
    });
  }

  async function disableQuestion() {
    await Api.disableQuestion(idQuestion.id).then(async () => {
      await fnUpdateListQuestion();
      setModal(false);
    });
  }

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <h4>Questão {idQuestion.index + 1}</h4>
          <span onClick={handleCloseModal}>X</span>
        </C.AreaClose>
        <C.AreaMenu>
          <C.Edit
            onClick={() => {
              setModal(false);
              setModalUpdateQuestion(true);
            }}
          >
            <BsPencilSquare />
            <p>Editar</p>
          </C.Edit>
          <C.Block
            onClick={() => {
              disableQuestion(idQuestion.id);
            }}
          >
            <BsFillBagXFill />
            <p>Pausar</p>
          </C.Block>
          <C.Delet
            onClick={() => {
              if (window.confirm("Deseja realmente excluir ?") == true) {
                deleteQuestion();
              }
            }}
          >
            <BsFillTrashFill />
            <p>Excluir</p>
          </C.Delet>
        </C.AreaMenu>
      </C.Modal>
    </C.Container>
  );
};
