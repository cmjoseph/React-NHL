import React from 'react';
import Image from '../media/Images';

class ModalPlayers extends React.Component {

	constructor(props){
        super(props);
        console.log(props);
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
                            <div className="modal__left">
                            players
                            </div>
                            <div className="modal__right">
                                <div className="player__name"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
	}
}

export default ModalPlayers;