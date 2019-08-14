import React from 'react';

const TeamItem = (props) => {
    return (
        <a href={props.url} target="_blank" className="grid__item">
			<img src='' className="grid__image"/>
		</a>
    );
}

export default TeamItem;