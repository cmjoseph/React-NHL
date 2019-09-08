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
            done: false,
            artist: 'Billy Talent Feat. Anti-Flag',
            song: 'Turn Your Back',
            data: undefined, 
        };
    }

    async componentDidMount() {
        const data = await NHLApi.getAllTeams();
        this.setState({ data: data, done: true});
    }

    render(){
        if (this.state.done === false) {
            return (
                <div className="loading__template page">
                    loading...
                </div>
            );
        } else {
            return (
                <div className="home__template page">
                    <div className="container">
                        <Video url={BackgroundVideo}></Video>
                        <Audio url={BackgroundMusic} artist={this.state.artist} song={this.state.song}></Audio>
                        <Slider teams={this.state.data}></Slider>
                    </div>
                </div>
            );
        }
    }
}

export default Home;