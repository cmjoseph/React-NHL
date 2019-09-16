import React from 'react';
import Image from '../media/Images';

class ModalPlayers extends React.Component {

	constructor(props){
        super(props);
        this.handleCloseModal = this.handleCloseModal.bind(this);
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
        const playerStats = stats.stats[0].splits[0];
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
        } else {
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
                                <table>
                                    <thead>
                                        <th>Name</th>
                                        <th>Name</th>
                                        <th>Name</th>
                                        <th>Name</th>
                                        <th>Name</th>
                                        <th>Name</th>
                                        <th>Name</th>
                                        <th>Name</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>Name</td>
                                            <td>Name</td>
                                            <td>Name</td>
                                            <td>Name</td>
                                            <td>Name</td>
                                            <td>Name</td>
                                            <td>Name</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="info__stats">
                                    <div className="fullName">
                                        <span className="label">Name</span>
                                        <span className="info">{player.fullName}</span>
                                    </div>
                                    <div className="primaryNumber">
                                        <span className="label">Jersey Number</span>
                                        <span className="info">#{player.primaryNumber}</span>
                                    </div>
                                    <div className="birthDate">
                                        <span className="label">Birthday</span>
                                        <span className="info">{player.birthDate}</span>
                                    </div>
                                    <div className="currentAge">
                                        <span className="label">Age</span>
                                        <span className="info">{player.currentAge}</span>
                                    </div>
                                    <div className="measurements">
                                        <span className="label">Height</span>
                                        <span className="info">{player.height}</span>
                                    </div>
                                    <div className="measurements">
                                        <span className="label">Weight</span>
                                        <span className="info">{player.weight} lbs</span>
                                    </div>
                                    <div className="birthCountry">
                                        <span className="label">Country</span>
                                        <span className="info">{player.birthCountry}</span>
                                    </div>
                                    <div className="birthCountry">
                                        <span className="label">City</span>
                                        <span className="info">{player.birthCity}</span>
                                    </div>
                                    <div className="primaryPosition">
                                        <span className="label">Position</span>
                                        <span className="info">{player.primaryPosition.name}</span>
                                    </div>
                                    <div className="primaryPosition">
                                        <span className="label">Shoots</span>
                                        <span className="info">{player.shootsCatches}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal__right">
                                <div className="season__stats">
                                    <div className="fullName">
                                        <span className="label">Name</span>
                                        <span className="info">{player.fullName}</span>
                                    </div>
                                    <div className="primaryNumber">
                                        <span className="label">Jersey Number</span>
                                        <span className="info">#{player.primaryNumber}</span>
                                    </div>
                                    <div className="birthDate">
                                        <span className="label">Birthday</span>
                                        <span className="info">{player.birthDate}</span>
                                    </div>
                                    <div className="currentAge">
                                        <span className="label">Age</span>
                                        <span className="info">{player.currentAge}</span>
                                    </div>
                                    <div className="measurements">
                                        <span className="label">Height</span>
                                        <span className="info">{player.height}</span>
                                    </div>
                                    <div className="measurements">
                                        <span className="label">Weight</span>
                                        <span className="info">{player.weight} lbs</span>
                                    </div>
                                    <div className="birthCountry">
                                        <span className="label">Country</span>
                                        <span className="info">{player.birthCountry}</span>
                                    </div>
                                    <div className="birthCountry">
                                        <span className="label">City</span>
                                        <span className="info">{player.birthCity}</span>
                                    </div>
                                    <div className="primaryPosition">
                                        <span className="label">Position</span>
                                        <span className="info">{player.primaryPosition.name}</span>
                                    </div>
                                    <div className="primaryPosition">
                                        <span className="label">Shoots</span>
                                        <span className="info">{player.shootsCatches}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
	}
}

export default ModalPlayers;