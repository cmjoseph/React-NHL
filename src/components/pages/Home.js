import React from 'react';
import Slider from '../slider/Slider';

class Home extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
            <div className="home__template">
                <h1>Home</h1>
                <Slider />
            </div>
        );
    }
}

export default Home;