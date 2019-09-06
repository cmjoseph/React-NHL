import React from 'react';
import NHLApi from '../api/NHLApi';
import Image from '../media/Images';

class PlayerItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: props.allteams,
            rosters: undefined,
        };
    }

    async componentDidMount() {
        const allrosters = [];
        let list = undefined;
        const data = this.state.data;
        let teams = await Promise.all(data.map(async (team, key) => {
            try {
                list = await NHLApi.getAllPlayers(team.id);
                allrosters.push({ logo: team.teamName, list: list.roster});
            } catch(err) {
                throw err;
            }
        }));
        this.setState({rosters: allrosters});
    }

    render(){
        if (this.state.rosters !== undefined) {
            const data = this.state.rosters;
            let rosters = data.map((roster, key) => {
                const teamroster = roster.list;
                const teamlogo = roster.logo;
                let players = teamroster.map((player, key) => {
                    return <a className="grid__player" href={player.person.link} key={key} team={teamlogo} face={`https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`} name={player.person.fullName} jersey={player.jerseyNumber}>
                        <span>{player.person.fullName}</span>
                        <img src={require(`../../images/teams/${teamlogo.toLowerCase().replace(/\s/g, '')}.svg`)}/>
                    </a>
                });
                return players;
            });
            return(
                <div className="grid__wrapper">
                    {rosters}
                </div>
            )
        } else {
            return(
                <div className="loading__template">
                    loading...
                </div>
            )
        }
    }

}

export default PlayerItem;