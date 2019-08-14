import React from 'react';

const Video = (props) => {
    return(
        <video id="video" muted loop autoPlay>
            <source src={props.url} type="video/mp4"/>
        </video>
    );
}

export default Video;