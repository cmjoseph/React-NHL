import React from 'react';

class NHLApi extends React.Component{

    static getAllTeams() {
        return fetch("https://statsapi.web.nhl.com/api/v1/teams")
                    .then(resp => resp.json());
    }

    static getAllPlayers(teamID) {
        return fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/roster`)
                    .then(resp => resp.json());   
    }

    static getAllTeamsRoster(arr) {
        return fetch(`https://statsapi.web.nhl.com/api/v1/teams?teamId=${arr}`)
                    .then(resp => resp.json());
    }

    static getSpecificPlayer(playerID) {
        return fetch(`https://statsapi.web.nhl.com/api/v1/people/${playerID}`)
                    .then(resp => resp.json());   
    }

    static getSpecificTeam(teamID) {
        return fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}`)
                    .then(resp => resp.json());
    }

    static getSpecificTeamRoster(teamID) {
        return fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/?expand=team.roster`)
                    .then(resp => resp.json());
    }

    static getSpecificPlayerStats(playerID) {
        return fetch(`https://statsapi.web.nhl.com/api/v1/people/${playerID}/stats?stats=statsSingleSeason&season=20182019`)
                    .then(resp => resp.json());   
    }
}

export default NHLApi;