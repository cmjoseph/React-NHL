import React from 'react';
import Image from '../media/Images';

class Modal extends React.Component {

	constructor(props){
        super(props);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal(e){
        e.preventDefault();
        document.body.classList.remove('modal-open');
    }

	render(){
        const headshots = this.props.data;
        const team = this.props.team;
        let players = undefined;
        if (headshots !== undefined) {
            players = headshots.map(player => {
            return  <div className="modal__player_item" key={player.person.id}>
                        <Image logo={`https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`} name={player.person.fullName} jersey={player.jerseyNumber}/>
                        <span className="modal__player_info">{player.person.fullName}</span>
                        <span className="modal__player_jersey">{`#${player.jerseyNumber}`}</span>
                    </div>
            });
        }
        if (players === undefined) {
    	 	return (
                <div className="modal">
                    <div className="modal__inner">
                        <img className="modal__team_logo" src={team} alt="Logo"/>
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
                        <img className="modal__team_logo" src={team} alt="Logo"/>
                        <button onClick={this.handleCloseModal}>Close</button>
                        <div className="modal__grid">
                            {players}
                        </div>
                    </div>
                </div>
            )
        }
	}
}

export default Modal;