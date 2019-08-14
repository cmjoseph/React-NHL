import React from 'react';
import TeamItem from '../grid/TeamItem';

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
	    	items.push(<TeamItem key={i} url={links[i]}></TeamItem>)
	    }
	    return (
	        <div className="players__template">
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