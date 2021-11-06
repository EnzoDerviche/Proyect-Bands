import React from 'react';
import {Link} from 'react-router-dom';
import { 
    Nav,
    List,
    Item
} from "../css/HomeStyles";

function Navbar(){
    return (
        <Nav>
            <List>
                <Link style={{ textDecoration: 'none' }} to='/home'><Item>Home</Item></Link>
                <Link style={{ textDecoration: 'none' }} to='/'><Item>Sign off</Item></Link>
            </List>
        </Nav>
    )
}

export default Navbar;