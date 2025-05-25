
import { Link } from "react-router-dom";

import styled from "styled-components";

export const FooterStyled = styled.footer`
    padding-left: 10px;
    padding-right: 10px;
`
export const Logo = styled.h2`
  display: flex;
  align-items: center;
  font-size: 42px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: left;
   transition: color 0.3s ease;
  &:hover {
    color: rgb(225, 60, 82);
  }
`;


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 84px;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: space-between;
  
`;
export const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;
  
`;
export const Input = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: inherit;
font-family: "Raleway";
font-size: 24px;
font-weight: 100;
line-height: 28px;
letter-spacing: 0%;

`
export const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`
export const FooterLink = styled.a`
  
   transition: color 0.3s ease;
  &:hover {
    color: rgb(225, 60, 82);
  }
`