import React from 'react';
import NHLApi from '../api/NHLApi';
import TeamItem from '../grid/TeamItem';

class Teams extends React.Component {

	constructor(){
        super();
        this.state = {};
    }

    async componentDidMount() {
        const data = await NHLApi.getAllTeams();
        this.setState(data);
    }
	
	render(){
		if (this.state.teams === undefined) {
            return (
                <div className="home__template">
                    loading...
                </div>
            );
        } else {
		    return (
		        <div className="teams__template">
			        <div className="grid__section">
						<TeamItem teams={this.state.teams}></TeamItem>
			        </div>
		        </div>
		    );
		}
	}
}

export default Teams;