import React from 'react';

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
        console.log(teams);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="grid__loading">Loading...</div>;
        } else {
            return(
                <div className="grid__wrapper">{teams.map((team) => { return <a href={team.officialSiteUrl} target="_blank" rel="noopener noreferrer" className="grid__team_item" key={team.name}> {team.name} </a>})}</div>
            )
        }
    }

}

export default TeamApi;