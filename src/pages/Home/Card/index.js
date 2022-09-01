import * as C from "./styled";

export const Card = (props) => {
  return (
    <C.Card value={props.color}>
      <C.AreaContent>
        <C.AreaTitle color={props.color}>
          <h2>{props.dominancia}</h2>
          <p>{props.title}</p>
        </C.AreaTitle>
        <C.LineCard2></C.LineCard2>
        <span>{props.value}</span>
      </C.AreaContent>
    </C.Card>
  );
};
