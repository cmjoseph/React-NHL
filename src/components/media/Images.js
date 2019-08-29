import React from 'react';

class Image extends React.Component {
	
	render(){
	    return (
	        <img src={this.props.logo} data-jersey={this.props.jersey} alt={this.props.name}/>
	    );
	}
}

export default Image;