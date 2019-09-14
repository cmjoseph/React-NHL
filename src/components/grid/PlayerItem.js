import React from 'react';
import NHLApi from '../api/NHLApi';
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
        await Promise.all(data.map(async (team, key) => {
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
            let teamroster, teamlogo = undefined;
            for (let i = 0; i < data.length; i++) {
                teamroster = data[i].list;
                teamlogo = data[i].logo;
                for (let i = 0; i < teamroster.length; i++) {
                	// console.log(teamroster[i]);
                    names.push({
                        name: teamroster[i].person.fullName, 
                        team: teamlogo,
                        face: teamroster[i].person.id,
                        jersey: teamroster[i].jerseyNumber,
                        link: teamroster[i].person.link,
                        position: teamroster[i].position.name,
                    });
                }
            }
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