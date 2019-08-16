import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
	{ to: '/teams', label: 'Teams' },
	{ to: '/players', label: 'Players' },
    { to: '/news', label: 'News' }
];

const isActive = (path, match, location) => !!(match || path === location.pathname);

const Nav = () => {
	const links = routes.map(({ to, label }) => {
		return <li key={to}><NavLink exact={true} to={to} activeClassName="active" isActive={isActive.bind(this, `${to}`)}>{label}</NavLink></li>
	});
	return <ul>{links}</ul>;
}

export default Nav