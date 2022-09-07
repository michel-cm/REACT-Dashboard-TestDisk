import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";

import { Api } from "../../services/Api";
import { useCandidatesTests } from "../../hooks/useCandidatesTests";

export const ModalConfirm = ({ setModal, id }) => {
  const { getAllCandidatesAndTestes } = useCandidatesTests();

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleDeletUser = async () => {
    console.log(id);
    await Api.deletUser(id)
      .then(() => {
        setModal(false);
      })
      .then(async () => {
        await getAllCandidatesAndTestes();
      });
  };

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <BsFillXCircleFill
            style={{
              cursor: "pointer",
            }}
            onClick={handleCloseModal}
          />
        </C.AreaClose>
        <p>Deseja excluir ?</p>

        <C.ButtonConfirm onClick={handleDeletUser}>Sim</C.ButtonConfirm>
        <C.ButtonNot onClick={handleCloseModal}>Não</C.ButtonNot>
      </C.Modal>
    </C.Container>
  );
};
