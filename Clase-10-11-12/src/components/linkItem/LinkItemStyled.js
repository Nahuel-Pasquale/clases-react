import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkItemStyled = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;

  color: #878787;
  text-decoration: none;

  &.active {
    color: #ffffff;
  }
`;