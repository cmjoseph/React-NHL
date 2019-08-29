import React from 'react';
import NHLApi from '../api/NHLApi';
import Image from '../media/Images';

class TeamItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            logos: props.teams,
            roster: null,
            modal: '',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    async handleClick(e){
        e.preventDefault();
        const team = await NHLApi.getAllPlayers(e.target.dataset.id);
        this.setState({
            roster: team.roster,
            modal: ' active',
        });
    }

    handleCloseModal(e){
        e.preventDefault();
        this.setState({
            modal: '',
        });
    }

    render(){
        const data1 = this.state.logos;
        const data2 = this.state.roster;
        let players = null;
        let logos = data1.map(logo => {
            return  <a onClick={this.handleClick} data-id={logo.id} href="/" target="_blank" rel="noopener noreferrer" className="grid__team_item" key={logo.name}>
                        <Image logo={require(`../../images/teams/${logo.teamName.toLowerCase().replace(/\s/g, '')}.svg`)} name={logo.name}/>
                        <span className="grid__team_info">{logo.name}</span>
                    </a>
            });
        if (data2) {
            players = data2.map(player => {
                return <Image key={player.person.id} logo={`https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`} name={player.person.fullName} jersey={player.jerseyNumber}/>
            });
        }
        return(
            <div className="grid__wrapper">
                {logos}
                <div className={`modal${this.state.modal}`}>
                    <button onClick={this.handleCloseModal}>Close</button>
                    <div className="modal__wrapper">
                        {players}
                    </div>
                </div>
            </div>
        )
    }

}

export default TeamItem;