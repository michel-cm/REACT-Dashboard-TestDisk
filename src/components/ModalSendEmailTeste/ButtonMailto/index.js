import React from "react";
import * as C from "./styled";

export const ButtonMailto = ({ mailto, label }) => {
  return (
    
      <C.Button className={"Link"}
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}   
      </C.Button>
  );
};
