export default class NHLApi{

    static getAllTeams() {
        return fetch("https://statsapi.web.nhl.com/api/v1/teams").then(resp => resp.json()) ;   
    }

    static getAllPlayers(teamID) {
        return fetch("https://statsapi.web.nhl.com/api/v1/teams/"+teamID+"?expand=team.roster").then(resp => resp.json()) ;   
    }

}