import React from 'react';
import placeholder from '../../images/nhl.svg';

class Image extends React.Component {

	addDefaultSrc(ev){
	  ev.target.src = placeholder;
	}

	render(){
	    return (
	        <img onError={this.addDefaultSrc} src={this.props.logo} data-jersey={this.props.jersey} alt={this.props.name}/>
	    );
	}
}

export default Image;