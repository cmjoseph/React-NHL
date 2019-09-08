import React from 'react';
import NHLApi from '../api/NHLApi';
import Image from '../media/Images';
import Modal from '../tools/Modal';

class TeamItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ready: false,
            teamdata: props.teams,
            gridteams: undefined,
            activeTeam: undefined,
            modalactive: false,
            modaldataplayers: undefined,
            modaldatateams: undefined,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(e){
        e.preventDefault();
        const item = e.target.parentElement.dataset.id;
        const data = await NHLApi.getSpecificTeamRoster(item);
        const getplayers = data.teams[0].roster.roster;
        if (getplayers !== undefined) {
            const getteam = this.props.teams.find(x => x.id === parseInt(item));
            this.setState({
                activeTeam: require(`../../images/teams/${getteam.teamName.toLowerCase().replace(/\s/g, '')}.svg`),
                modalactive: true,
                modaldataplayers: getplayers,
                modaldatateams: getteam,
            });
            document.body.classList.add('modal-open');
        }
    }

    componentDidMount(){
        const teamgrid = this.state.teamdata;
        let logos = undefined;
        if (teamgrid !== undefined) {
            logos = teamgrid.map(logo => {
            return  <a onClick={this.handleClick} data-id={logo.id} href="/" target="_blank" rel="noopener noreferrer" className="grid__team_item" key={logo.name}>
                        <div className="grid__item_content">
                            <Image logo={require(`../../images/teams/${logo.teamName.toLowerCase().replace(/\s/g, '')}.svg`)} name={logo.name}/>
                            <span className="grid__team_info">{logo.name}</span>
                        </div>
                    </a>
            });
        }
        this.setState({
            ready: true,
            gridteams: logos,
        });
    }

    render(){
        const headshots = this.state.modaldataplayers;
        const ready = this.state.ready;
        const grid = this.state.gridteams;
        if (!ready) {
            return(
                <div className="loading__template">
                    loading...
                </div>
            )
        } else {
            return(
                <div className="grid__wrapper">
                    <div className="grid">
                        {grid}
                    </div>
                    <Modal data={headshots} team={this.state.activeTeam}></Modal> : null
                </div>
            )
        }
    }

}

export default TeamItem;