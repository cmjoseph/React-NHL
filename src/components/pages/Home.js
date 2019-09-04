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
        this.state = {
            artist: 'Billy Talent Feat. Anti-Flag',
            song: 'Turn Your Back',
        };
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
                    <div className="container">
                        <Video url={BackgroundVideo}></Video>
                        <Audio url={BackgroundMusic} artist={this.state.artist} song={this.state.song}></Audio>
                        <Slider teams={this.state.teams}></Slider>
                    </div>
                </div>
            );
        }
    }
}

export default Home;