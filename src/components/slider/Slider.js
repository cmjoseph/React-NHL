import React from 'react';
import TinySlider from "tiny-slider-react";

class Slider extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            teams: props.teams
        };
    }

    render(){
        const settings = {
            items: this.state.teams.length,
            controlsPosition: 'bottom',
            lazyload: true,
            controls: true,
            nav: false,
            mouseDrag: true,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayButtonOutput: false,
            autowidth: true,
            // gutter: 20,
            responsive: {
                960: {
                    items: 3
                },
                768: {
                    items: 2
                },
                480: {
                    items: 1
                },
            },
        };
        const teams = this.state.teams;
        const imgStyles = null;
        return(
            <div className="slider__container">
                <TinySlider settings={settings}>
                    {teams.map((team, index) => (
                        <div key={index} style={{ position: "relative" }}>
                            <a href={team.officialSiteUrl} target="_blank" rel="noopener noreferrer" className="slide__team" key={team.name}>
                                <div className="slide__team_content">
                                    <img
                                      className={`tns-lazy-img`}
                                      data-src={require(`../../images/teams/${team.teamName.toLowerCase().replace(/\s/g, '')}.svg`)}
                                      alt=""
                                      style={imgStyles}
                                    />
                                    <div className="slide__info">
                                        <span>{team.name}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </TinySlider>
            </div>
        );
    }
}

export default Slider;