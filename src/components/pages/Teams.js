import React from 'react';
import TeamItem from '../grid/TeamItem';

class Teams extends React.Component {
	render(){
		const index = 4;
    	let items = [];
    	let links = [
			'http://www.google.com',
			'http://www.yahoo.com',
			'http://www.rds.com',
			'http://www.youtube.com',
    	]
	    for (let i = 0; i < index; i++) {
	    	items.push(<TeamItem key={i} url={links[i]}></TeamItem>)
	    }
	    return (
	        <div className="teams__template">
	        	<h1>Teams</h1>
		        <div className="grid__section">
		            <div className="grid__wrapper">
						{items}
		            </div>
		        </div>
	        </div>
	    );
	}
}

export default Teams;