import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled(Link)`
  background-color: #fc5a5a;
  color: #f8f8f8;
  padding: 18px 30px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);  
  text-align: center;
  
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;
