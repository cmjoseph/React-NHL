import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/nhl.svg';


class Menu extends React.Component {

    render(){
        return (
            <div className="menu__main">
                <div className="menu__main_wrapper">
                    <NavLink className="menu__logo" strict exact to={'/'}><img id="logo" src={Logo} alt="Logo" /></NavLink>
                	<div className="menu__main_nav">
        	            <Nav></Nav>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Menu;