import * as C from "./styled";

import iconArrowRight from "../../assets/actions/arrowRight.png";
import { useState } from "react";


export const Accordion = ({state, setState, title, color}) => {
   

    return (
    <C.Container value={color}>
      <h3>{title}</h3>
      <C.ArrowIcon src={iconArrowRight} show={state} onClick={()=> setState(!state)}/>
    </C.Container>
  );
};
