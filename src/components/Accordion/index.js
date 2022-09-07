import * as C from "./styled";

import iconArrowRight from "../../assets/actions/arrowRight.png";

export const Accordion = ({ state, setState, title, color }) => {
  return (
    <C.Container value={color} onClick={() => setState(!state)}>
      <h3>{title}</h3>
      <C.ArrowIcon src={iconArrowRight} show={state} />
    </C.Container>
  );
};
