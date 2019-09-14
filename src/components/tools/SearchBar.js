import React from 'react';
import ModalPlayers from './ModalPlayers';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchString: "",
            users: [],
            player: undefined,
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

    handleClick(e){
        e.preventDefault();
        this.setState({
            player: e.target.dataset,
        });
    }

    render(){
        let _users = this.state.users;
        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
            _users = _users.filter(function(user) {
                return user.name.toLowerCase().match(search);
            });
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
                    <ModalPlayers data={this.state.player}></ModalPlayers>
                </div>
            </div>
        );
    }
}

export default SearchBar;