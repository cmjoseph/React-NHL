import React from 'react';
import TeamItem from '../grid/TeamItem';
import Api from '../../api/Api';

console.log(Api)
class Teams extends React.Component {
	render(){
    	let league = [];
    	let teams = [
			{
				logo: 1,
				city: 'NEW JERSEY',
				name: 'DEVILS',
				web: 'https://www.nhl.com/devils'
			},
			{
				logo: 2,
				city: 'NEW YORK',
				name: 'ISLANDERS',
				web: 'https://www.nhl.com/islanders'
			},
			{
				logo: 3,
				city: 'NEW YORK',
				name: 'ISLANDERS',
				web: 'https://www.nhl.com/islanders'
			},
			{
				logo: 4,
				city: 'NEW YORK',
				name: 'ISLANDERS',
				web: 'https://www.nhl.com/islanders'
			}
    	]
	    for (let i = 0; i < teams.length; i++) {
	    	league.push(<TeamItem key={i} logo={teams[i].logo} web={teams[i].web} name={teams[i].name} city={teams[i].city} ></TeamItem>)
	    }
	    return (
	        <div className="teams__template">
		        <div className="grid__section">
		            <div className="grid__wrapper">
						{league}
		            </div>
		            <Api></Api>
		        </div>
	        </div>
	    );
	}
}

export default Teams;