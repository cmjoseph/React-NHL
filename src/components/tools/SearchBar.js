import React from 'react';
import NHLApi from '../api/NHLApi';
import ModalPlayers from './ModalPlayers';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            searchString: "",
            users: [],
            player: undefined,
            stats: undefined,
            team: undefined,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            users: this.props.users
        });
        this.refs.search.focus();
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });
    }

    async handleClick(e){
        e.preventDefault();
        const id = e.target.dataset.id;
        const getteam = e.target.dataset.team;
        const getplayer = await NHLApi.getSpecificPlayer(id);
        const getstats = await NHLApi.getSpecificPlayerStats(id);
        console.log(getstats);
        this.setState({
            player: getplayer,
            stats: getstats,
            team: getteam
        });
        document.body.classList.add('modal-open');
    }

    render(){
        let modal;
        let _users = this.state.users;
        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
            _users = _users.filter(function(user) {
                return user.name.toLowerCase().match(search);
            });
        }

        if (this.state.player !== undefined || this.state.stats !== undefined) {
            modal = <ModalPlayers data={this.state.player} team={this.state.team} stats={this.state.stats}></ModalPlayers>
        }

        return (
            <div className="grid__search">
                <h3>Search the NHL</h3>
                <input
                    type="text"
                    value={this.state.searchString}
                    ref="search"
                    onChange={this.handleChange}
                    placeholder="Type player name"
                />
                <div className="grid__wrapper">
                    {_users.map((l,key) => {
                        return (
                            <a className="grid__player" onClick={this.handleClick} href={l.link} key={key} 
                            data-id={l.face} 
                            data-team={l.team} 
                            data-face={`https://nhl.bamcontent.com/images/headshots/current/168x168/${l.face}.jpg`} 
                            data-name={l.name}
                            data-position={l.position} 
                            data-jersey={l.jersey}>
                                <span>{l.name}</span>
                                <img src={require(`../../images/teams/${l.team.toLowerCase().replace(/\s/g, '')}.svg`)} alt="Logo"/>
                            </a>
                        );
                    })}
                </div>
                {modal}
            </div>
        );
    }
}

export default SearchBar;