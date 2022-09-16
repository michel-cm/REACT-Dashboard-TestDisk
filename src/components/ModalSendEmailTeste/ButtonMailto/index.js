import React from "react";
import * as C from "./styled";

export const ButtonMailto = ({
  mailto,
  label,
  email,
  testListQuestionsActive,
  addNewCandidate,
  setModal,
  getAllCandidatesAndTestes,
}) => {
  return (
    <C.Button
      className={"Link"}
      to="#"
      onClick={async (e) => {
        await addNewCandidate(email, testListQuestionsActive).then(async () => {
          await getAllCandidatesAndTestes();
          setModal(false);
        });
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      {label}
    </C.Button>
  );
};
