import React from 'react';

const PlayerItem = (props) => {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="grid__item">
			<img src="" className="grid__image" alt="" />
		</a>
    );
}

export default PlayerItem;