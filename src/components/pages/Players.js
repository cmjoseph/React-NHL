import React from 'react';
import PlayerApi from '../grid/PlayerApi';

class Players extends React.Component {
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
	    	items.push(<PlayerApi key={i} url={links[i]}></PlayerApi>)
	    }
	    return (
	        <div className="players__template">
	        	<h1>Players</h1>
		        <div className="grid__section">
		            <div className="grid__wrapper">
						{items}
		            </div>
		        </div>
	        </div>
	    );
	}
}

export default Players;