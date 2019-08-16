import React from 'react';
import Image from '../media/Images';


console.log(Image);
class TeamApi extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            teams: []
        };
    }

    fetchUsers() {
        fetch("https://statsapi.web.nhl.com/api/v1/teams")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    teams: result.teams
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
        this.fetchUsers();
    }

    render(){
        const { isLoaded, teams, error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="grid__loading">Loading...</div>;
        } else {
            console.log(teams);
            let images = teams.map(team => {
            return  <a href={team.officialSiteUrl} target="_blank" rel="noopener noreferrer" className="grid__team_item" key={team.name}>
                        <Image logo={require(`../../images/teams/${team.teamName.toLowerCase().replace(/\s/g, '')}.svg`)} name={team.name}/>
                        <span className="grid__team_info">{team.name}</span>
                    </a>
            });

            return(
                <div className="grid__wrapper">
                    {images}
                </div>
            )
        }
    }

}

export default TeamApi;