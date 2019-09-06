import React from 'react';
import NHLApi from '../api/NHLApi';
import PlayerItem from '../grid/PlayerItem';

class Players extends React.Component {
	
	constructor(){
        super();
        this.state = {
            roster: undefined,
        };
    }

    async componentDidMount() {
        const allteams = await NHLApi.getAllTeams();
        this.setState({ roster: allteams.teams });
    }
	
	render(){
		if (this.state.roster === undefined) {
            return (
                <div className="home__template">
                    loading...
                </div>
            );
        } else {
            const all = this.state.roster;
		    return (
		        <div className="players__template">
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