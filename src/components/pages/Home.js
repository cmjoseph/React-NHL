import React from 'react';
import NHLApi from '../api/NHLApi';
import Slider from '../slider/Slider';

class Home extends React.Component {

    constructor(){
        super();
        this.state = {};
    }

    async componentDidMount() {
        const data = await NHLApi.getAllTeams();
        this.setState(data);
    }

    render(){
        if (this.state.teams === undefined) {
            return (
                <div className="home__template">
                    loading...
                </div>
            );
        } else {
            return (
                <div className="home__template">
                    <Slider teams={this.state.teams}></Slider>
                </div>
            );
        }
    }
}

export default Home;