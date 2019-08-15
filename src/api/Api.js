import React from 'react';

class Api extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            teams: []
        };
    }

    componentDidMount() {
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

    render() {
        const { error, isLoaded, teams } = this.state;
        console.log(this.state);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                {teams.map(team => (
                    <li key={team.id}>
                        {team.name} {team.price}
                    </li>
                ))}
                </ul>
            );
        }
    }
}

export default Api;