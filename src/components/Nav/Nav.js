import React from "react";
import "./Nav.css";
import {Navbar, NavItem} from "react-materialize";

const Nav = props => (
    <Navbar brand={props.user.username ? props.user.username + "'s Bukit List" : "Welcome to Bukit List"} right>
        <NavItem onClick={() => console.log('log out')}>Log Out</NavItem>
    </Navbar>
);

export default Nav;