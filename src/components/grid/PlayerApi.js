import React from 'react';
import Image from '../media/Images';
// https://nhl.bamcontent.com/images/headshots/current/168x168/8477474.jpg

class PlayerApi extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            players: []
        };
    }

    fetchTeams() {
        fetch("https://statsapi.web.nhl.com/api/v1/teams/6?expand=team.roster")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    players: result.roster
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    componentDidMount() {
        this.fetchTeams();
    }

    render(){
        const { isLoaded, players, error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="grid__loading">Loading...</div>;
        } else {
            console.log(players);
            // let images = teams.map(team => {
            // return  <a href={team.officialSiteUrl} target="_blank" rel="noopener noreferrer" id="" className="grid__team_item" key={team.name}>
            //             <Image logo={require(`../../images/teams/${team.teamName.toLowerCase().replace(/\s/g, '')}.svg`)} name={team.name}/>
            //             <span className="grid__team_info">{team.name}</span>
            //         </a>
            // });

            return(
                <div className="grid__wrapper">
                </div>
            )
        }
    }

}

export default PlayerApi;