import React from 'react';

const Video = (props) => {
    return(
        <video className="video__container" id="video" muted loop autoPlay>
            <source src={props.url} type="video/mp4"/>
        </video>
    );
}

export default Video;