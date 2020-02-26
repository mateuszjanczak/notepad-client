import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background: limegreen;
  display: flex;
`;

const NavListItem = styled.li`

`;

const Link = styled.button`
  display: block;
  color: black;
  text-decoration: none;
  padding: 10px;

  &:hover {
  background-color: greenyellow;
  }
  
  &.active {
    text-decoration: underline;
  }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <NavListItem>
                    <Link as={NavLink} exact to="/">Home</Link>
                </NavListItem>
                <NavListItem>
                    <Link as={NavLink} to="/notes">Notes</Link>
                </NavListItem>
            </NavList>
        </Nav>
    )
};

export default Navbar;
