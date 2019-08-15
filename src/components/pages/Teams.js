import React from 'react';
import TeamApi from '../grid/TeamApi';

class Teams extends React.Component {
	
	render(){
	    return (
	        <div className="teams__template">
		        <div className="grid__section">
					<TeamApi></TeamApi>
		        </div>
	        </div>
	    );
	}
}

export default Teams;