import React from "react";
import * as C from "./styled";

export const ButtonMailto = ({ mailto, label,email,testListQuestionsActive, addNewCandidate }) => {
 
  return (  
      <C.Button className={"Link"}
        to="#"
        onClick={async (e) => {
          await addNewCandidate(email, testListQuestionsActive);
          e.preventDefault();
          window.location.href = mailto;
        }}
      >
        {label}   
      </C.Button>
  );
};
