import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav'
import Logo from '../../images/nhl.svg';

console.dir(Nav);

class Menu extends React.Component {
    render(){
        return (
            <div className="menu__main">
                <div className="menu__main_wrapper">
                	<div className="menu__logo"><img id="logo" src={Logo} alt="Logo" /></div>
                	<div className="menu__main_nav">
        	            <ul>
        	                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        	                <li><NavLink to="/teams" activeClassName="active">Teams</NavLink></li>
        	                <li><NavLink to="/players" activeClassName="active">Players</NavLink></li>
        	            </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;