import React from 'react';
import NHLApi from '../api/NHLApi';
import PlayerItem from '../grid/PlayerItem';

class Players extends React.Component {
	
	constructor(){
        super();
        this.state = {
            ready: false,
            roster: undefined,
        };
    }

    async componentDidMount() {
        const allteams = await NHLApi.getAllTeams();
        this.setState({ roster: allteams.teams, ready: true });
    }
	
	render(){
		if (this.state.ready === false) {
            return (
                <div className="loading__template page">
                    loading...
                </div>
            );
        } else {
            const all = this.state.roster;
		    return (
		        <div className="players__template page">
                    <div className="container">
    			        <div className="grid__section">
                            <PlayerItem allteams={all}></PlayerItem>
    			        </div>
                    </div>
		        </div>
		    );
		}
	}
}

export default Players;