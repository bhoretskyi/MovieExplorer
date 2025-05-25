
import { Link } from "react-router-dom";

import styled from "styled-components";
export const Logo = styled.h2`
  display: flex;
  align-items: center;
  font-size: 42px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: left;
`;
export const HeaderBlock = styled.header`
  padding-top: 42px;
  padding-bottom: 31px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 84px;
`;
export const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0%;
`;
