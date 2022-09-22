import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);

  & {
    @media screen and (min-width: 1300px) {
      width: 100%;
      margin: 0 0;
    }
  }

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
    font-size: 14px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset !important;

    padding-top: 19px;
    padding-bottom: 19px;
  }

  .row .cell:nth-child(1) {
    width: 320px;
    padding-left: 20px;
  }

  .row .cell:nth-child(2) {
    width: 280px;
  }

  .row .cell:nth-child(3) {
    width: 160px;
  }

  .row .cell:nth-child(4) {
    width: 160px;
  }
  .row .cell:nth-child(5) {
    width: 140px;
  }
  .row .cell:nth-child(6) {
    width: 80px;
  }
  .row .cell:nth-child(7) {
    width: 60px;
  }
  .row .cell:nth-child(8) {
    width: 60px;
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
  padding: 4px;

  &:hover {
    opacity: 0.85;
  }
`;

export const Candidate = styled.p`
  color: ${(props) =>
    props.predo == "Dominante"
      ? "#FC5A5A"
      : props.predo == "Influente"
      ? "#E2992B"
      : props.predo == "Estavel"
      ? "#3AB04D"
      : props.predo == "Condescendente"
      ? "#2261BC"
      : "#F8F8F8"};
`;
