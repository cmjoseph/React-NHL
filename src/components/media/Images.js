import React from 'react';

class Image extends React.Component {
	
	render(){
	    return (
	        <img src={this.props.logo} alt={this.props.name}/>
	    );
	}
}

export default Image;