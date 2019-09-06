import React from 'react';
import NHLApi from '../api/NHLApi';
import Image from '../media/Images';
import SearchBar from '../tools/SearchBar';

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
            const names = [];
            let rosters = data.map((roster, key) => {
                const teamroster = roster.list;
                const teamlogo = roster.logo;
                let players = teamroster.map((player, key) => {
                    names.push({
                        name: player.person.fullName, 
                        team: teamlogo,
                        face: player.person.id,
                        jersey: player.jerseyNumber,
                        link: player.person.link,
                    });
                });
            });
            return(
                <SearchBar users={names}></SearchBar>
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