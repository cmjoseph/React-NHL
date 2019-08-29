import React from 'react';
import NHLApi from '../api/NHLApi';
import Image from '../media/Images';

class TeamItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            logos: props.teams,
            roster: '',
            modal: '',
            activeTeam: '',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    async handleClick(e){
        e.preventDefault();
        const item = e.target.dataset.id;
        const team = await NHLApi.getAllPlayers(item);
        const current = this.props.teams.find(x => x.id === parseInt(item));
        document.body.classList.add('modal-open');
        this.setState({
            roster: team.roster,
            modal: 'active',
            activeTeam: require(`../../images/teams/${current.teamName.toLowerCase().replace(/\s/g, '')}.svg`),
        });
    }

    handleCloseModal(e){
        e.preventDefault();
        document.body.classList.remove('modal-open');
        this.setState({
            roster: '',
            modal: '',
            activeTeam: '',
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
        if (data2 !== null && data2 !== '') {
            console.log(this.state);
            players = data2.map(player => {
            return  <div className="modal__player_item" key={player.person.id}>
                        <Image logo={`https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`} name={player.person.fullName} jersey={player.jerseyNumber}/>
                        <span className="modal__player_info">{player.person.fullName}</span>
                        <span className="modal__player_jersey">{`#${player.jerseyNumber}`}</span>
                    </div>
            });
        }

        return(
            <div className="grid__wrapper">
                {logos}
                <div className="modal">
                    <img className="modal__team_logo" src={this.state.activeTeam} alt="Logo"/>
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