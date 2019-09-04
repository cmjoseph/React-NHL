import React from 'react';
import Image from '../media/Images';

class PlayerItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            roster: props.players
        };
    }

    render(){
        const data = this.state.roster;
        let players = data.map((player, key) => {
            return <Image key={key} logo={`https://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`} name={player.person.fullName} jersey={player.jerseyNumber}/>
        });

        return(
            <div className="grid__wrapper">
                {players}
            </div>
        )
    }

}

export default PlayerItem;