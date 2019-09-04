import React from 'react';
import NHLApi from '../api/NHLApi';
import PlayerItem from '../grid/PlayerItem';

class Players extends React.Component {
	
	constructor(){
        super();
        this.state = {};
    }

    async componentDidMount() {
        const data = await NHLApi.getAllPlayers(6);
        this.setState(data);
    }
	
	render(){
		if (this.state.roster === undefined) {
            return (
                <div className="home__template">
                    loading...
                </div>
            );
        } else {
		    return (
		        <div className="teams__template">
                    <div className="container">
    			        <div className="grid__section">
    						<PlayerItem players={this.state.roster}></PlayerItem>
    			        </div>
                    </div>
		        </div>
		    );
		}
	}
}

export default Players;