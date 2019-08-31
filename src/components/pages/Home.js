import React from 'react';
import NHLApi from '../api/NHLApi';
import Slider from '../slider/Slider';
import Video from '../video/Video';
import Audio from '../audio/Audio';
import BackgroundVideo from  '../../images/skating.mp4';
import BackgroundMusic from  '../../images/music.mp3';


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
                    <Video url={BackgroundVideo}></Video>
                    <Audio url={BackgroundMusic}></Audio>
                    <Slider teams={this.state.teams}></Slider>
                </div>
            );
        }
    }
}

export default Home;