import React from 'react';

const TeamItem = (props) => {
    return (
        <a href={props.web} target="_blank" rel="noopener noreferrer" className="grid__team_item">
			<img src={'https://www-league.nhlstatic.com/builds/site-core/01c1bfe15805d69e3ac31daa090865845c189b1d_1458063644/images/team/logo/current/'+props.logo+'_dark.svg'} className="grid__team_logo" alt="" />
			<div className="grid__team_info">
				<span>{props.city}</span>
				<span>{props.name}</span>
			</div>
		</a>
    );
}

export default TeamItem;