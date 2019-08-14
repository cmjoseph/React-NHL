import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
	{ to: '/teams', label: 'Teams' },
	{ to: '/players', label: 'Players' },
    { to: '/news', label: 'News' }
];

const Nav = () => {
	const links = routes.map(({ to, label }) => {
		return <li key={to}><NavLink strict exact to={to} key={to}>{label}</NavLink></li>}
	)

	return <ul>{ links }</ul>;
}

export default Nav