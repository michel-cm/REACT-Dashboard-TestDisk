import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(77, 77, 77, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  transition: all 0.4s;
  z-index: 10;

  color: ${(props) => props.theme.colors.text};

  p {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Modal = styled.div`
  width: 95%;
  height: 95%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 48px 32px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;

  @media print {
    & {
      padding: 0px 32px;

      @page {
        size: landscape;
      }

      background-color: #fff;
      color: #000;
    }
    a {
      color: #000;
    }
  }

  @media print {
    .pagebreak {
      margin-top: -48px;
    }
  }

  @media print {
    .pagebreakDisplayNone {
      display: none;
    }
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

export const AreaClose = styled.div`
  padding-bottom: 8px;
  width: 100%;
  display: flex;
  justify-content: end;
  position: fixed;
  right: 64px;
  top: 32px;
  z-index: 10;

  p {
    font-weight: bold;
    padding: 8px;
    font-size: 24px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
  }
`;

// area table
export const AreaTableUser = styled.div`
  margin-top: 32px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;

  .container-table100 {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }

  .wrap-table100 {
    width: 100%;
    border-radius: 0px;
    overflow: hidden;
  }

  .table {
    width: 100%;
    display: table;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    .table {
      display: block;
    }
  }

  .row {
    display: table-row;
    background: ${(props) => props.theme.colors.primary};

    @media print {
      & {
        color: #000 !important;
        background-color: #fff;
      }
    }
  }

  .row.header {
    background: #5a9bfc;
  }

  @media screen and (max-width: 768px) {
    .row {
      display: block;
    }

    .row.header {
      padding: 0;
      height: 0px;
    }

    .row.header .cell {
      display: none;
    }

    .row .cell:before {
      font-family: Poppins-Bold;
      font-size: 14px;
      color: #808080;
      line-height: 1.2;
      text-transform: uppercase;
      font-weight: unset !important;

      margin-bottom: 13px;
      min-width: 98px;
      display: block;
    }
  }

  .cell {
    display: table-cell;
  }

  @media screen and (max-width: 768px) {
    .cell {
      display: block;
    }
  }

  .row .cell {
    font-size: 13px;
    color: ${(props) => props.theme.colors.text};
    line-height: 1.2;
    font-weight: unset !important;

    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.colors.background};
  }

  .row.header .cell {
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset !important;

    padding-top: 19px;
    padding-bottom: 19px;
  }

  .row .cell:nth-child(1) {
    width: 340px;
    padding-left: 20px;
  }

  .row .cell:nth-child(2) {
    width: 200px;
  }

  .row .cell:nth-child(3) {
    width: 320px;
  }

  .row .cell:nth-child(4) {
    width: 140px;
  }
  .row .cell:nth-child(5) {
    width: 160px;
  }
  .row .cell:nth-child(6) {
    width: 100px;
  }
  .row .cell:nth-child(7) {
    width: 40px;
  }

  .table,
  .row {
    width: 100% !important;
  }

  .row:hover {
    background-color: ${(props) => props.theme.colors.background};
  }
  .row:nth-child(1):hover {
    background-color: #5a9bfc;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .row {
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 18px;
      padding-top: 30px;
      padding-right: 15px;
      margin: 0;
    }

    .row .cell {
      border: none;
      padding-left: 30px;
      padding-top: 16px;
      padding-bottom: 16px;
    }
    .row .cell:nth-child(1) {
      padding-left: 30px;
    }

    .row .cell {
      font-size: 18px;
      color: #555555;
      line-height: 1.2;
      font-weight: unset !important;
    }

    .table,
    .row,
    .cell {
      width: 100% !important;
    }
  }

  .icon {
    width: 18px;
    margin-right: 16px;
    cursor: pointer;
  }

  .icon:hover {
    opacity: 0.5;
  }
`;

export const AreaIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 4px 12px 4px 4px;

  &:hover {
    opacity: 0.85;
  }
`;

export const AreaValues = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 790px) {
    width: 100%;
  }
`;

export const AreaChart = styled.div`
  margin: 16px 0px;
  width: 80%;
  @media (max-width: 790px) {
    width: 100%;
  }
`;

export const Values = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  gap: 28px;

  @media (max-width: 790px) {
    gap: 16px;
  }

  div {
    padding: 20px 32px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
    color: #f8f8f8;
    @media (max-width: 790px) {
      padding: 32px 16px;
    }
  }
`;

export const AreaQuestions = styled.div`
  margin-top: 24px;
`;

export const Question = styled.div`
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 48px;
`;

export const Header = styled.div`
  display: flex;
  border-radius: 6px 6px 0 0;
  background-color: #2261bc;
  width: 100%;

  align-items: center;
`;

export const Number = styled.div`
  border-radius: 0px 5px 5px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 7%;
  padding: 4px;
  background-color: #fff;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);

  @media (max-width: 790px) {
    font-size: 24px;
  }
`;

export const Titulo = styled.div`
  font-weight: bold;
  padding: 12px 16px;

  color: #f8f8f8;

  font-size: 14px;
`;

export const Table = styled.div``;

export const AreaAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #ccc;

  padding: 16px;
`;

export const TitleAnswer = styled.h4`
  font-weight: 400;
  padding-right: 16px;
`;

export const AnswerValue = styled.h4`
  font-weight: 400;
  background-color: ${(props) =>
    props.value == 1
      ? "red"
      : props.value == 4
      ? "green"
      : props.theme.colors.primary};
  padding: 16px;
  border-radius: 5px;
  color: ${(props) =>
    props.value == 1
      ? "#FFF"
      : props.value == 4
      ? "#FFF"
      : `${(props) => props.theme.colors.text}`};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
`;

export const AreaTimerTest = styled.div`
  margin: 32px 0px;
  padding: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
  border-left: 6px solid ${(props) => props.theme.colors.text};

  p,
  h4 {
    text-align: center;
    margin-left: 8px;
  }

  @media print {
    & {
      color: #000 !important;
      background-color: #fff;
    }
  }
`;
export const TitleAreaTimerUsed = styled.div`
  margin: 32px 0px 0px 0px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;

  @media print {
    & {
      color: #000 !important;
      background-color: #fff;
      box-shadow: none;
    }
  }
`;

export const TitleAreaTimer = styled.div`
  display: flex;
`;
