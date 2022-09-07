import * as C from "./styled";

export const Card = (props) => {
  return (
    <C.CardTotalQuestions value={props.color}>
      <div>
        <p>{props.title}</p>
        <C.LineCard2></C.LineCard2>
        <span>{props.value}</span>
      </div>
    </C.CardTotalQuestions>
  );
};
