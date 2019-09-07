import React from 'react';
import NHLApi from '../api/NHLApi';
import TeamItem from '../grid/TeamItem';
import Logo from '../../images/nhl.svg';

class Teams extends React.Component {

	constructor(){
        super();
        this.state = {
        	done: false,
        	teams: undefined,
        };
    }

    async componentDidMount() {
        const data = await NHLApi.getAllTeams();
    	this.setState({ done: true, teams: data.teams});
    }
	
	render(){
		if (this.state.done === false) {
            return (
                <div className="loading__template">
                    <img src={Logo} alt="Loading..."/>
                </div>
            );
        } else {
		    return (
		        <div className="teams__template">
			        <div className="container">
				        <div className="grid__section">
							<TeamItem teams={this.state.teams}></TeamItem>
				        </div>
			        </div>
		        </div>
		    );
		}
	}
}

export default Teams;