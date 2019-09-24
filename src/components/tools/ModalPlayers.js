import React from 'react';
import Image from '../media/Images';

class ModalPlayers extends React.Component {

	constructor(props){
        super(props);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.countries = {
            DNK: 'Danemark',
            CAN: 'Canada',
        }
    }

    handleCloseModal(e){
        e.preventDefault();
        document.body.classList.remove('modal-open');
    }

	render(){
        const data = this.props.data;
        const stats = this.props.stats;
        const team = this.props.team;
        const player = data.people[0];
        const playerStats = stats.stats[0].splits[0].stat;
        console.log(playerStats);
        
        if (player === undefined || team === undefined) {
    	 	return (
                <div className="modal">
                    <div className="modal__inner">
                        <button onClick={this.handleCloseModal}>Close</button>
                        <div className="modal__grid">
                            Loading...
                        </div>
                    </div>
                </div>
            )
        } else if (playerStats !== undefined) {
            return(
                <div className="modal">
                    <div className="modal__inner">
                        <button onClick={this.handleCloseModal}>Close</button>
                        <div className="modal__grid_player">
                            <div className="modal__left">
                                <div className="info__headshot">
                                    <div className="wrapper">
                                        <img className="modal__stats_head" src={`https://nhl.bamcontent.com/images/headshots/current/168x168/${player.id}.jpg`} alt={player.fullName} />
                                        <img className="modal__stats_logo" src={require(`../../images/teams/${team.toLowerCase().replace(/\s/g, '')}.svg`)} alt="Logo"/>
                                    </div>
                                </div>
                                <table className="bio__stats">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Number</th>
                                            <th>Birthday</th>
                                            <th>Age</th>
                                            <th>Height</th>
                                            <th>Weight</th>
                                            <th>Country</th>
                                            <th>City</th>
                                            <th>Position</th>
                                            <th>Shoots</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{player.fullName}</td>
                                            <td>{player.primaryNumber}</td>
                                            <td>{player.birthDate}</td>
                                            <td>{player.currentAge}</td>
                                            <td>{player.height}</td>
                                            <td>{player.weight}</td>
                                            <td>{player.birthCountry}</td>
                                            <td>{player.birthCity}</td>
                                            <td>{player.primaryPosition.name}</td>
                                            <td>{player.shootsCatches}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="player__stats">
                                    <thead>
                                        <tr>
                                            <th>Games</th>
                                            <th>Goals</th>
                                            <th>Assists</th>
                                            <th>Points</th>
                                            <th>Plus/Minus</th>
                                            <th>Powerplay Goals</th>
                                            <th>Powerplay Points</th>
                                            <th>Shorthanded Goals</th>
                                            <th>Hits</th>
                                            <th>Penalty Minutes</th>
                                            <th>Shots On Goal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{playerStats.games}</td>
                                            <td>{playerStats.goals}</td>
                                            <td>{playerStats.assists}</td>
                                            <td>{playerStats.points}</td>
                                            <td>{playerStats.plusMinus}</td>
                                            <td>{playerStats.powerPlayGoals}</td>
                                            <td>{playerStats.powerPlayPoints}</td>
                                            <td>{playerStats.shortHandedGoals}</td>
                                            <td>{playerStats.hits}</td>
                                            <td>{playerStats.pim}</td>
                                            <td>{playerStats.shots}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
	}
}

export default ModalPlayers;