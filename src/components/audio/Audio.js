import React from 'react';
import ReactDOM from "react-dom";

class Audio extends React.Component {

	constructor(){
		super();
		this.state = { containerId: "" };
	}

	 componentDidMount() {
	    this.setState({
	      	containerId: ReactDOM.findDOMNode(this).parentNode.getElementsByTagName("audio"),
	    });
	    console.log(this.state);
  	}

	render(){
	    return(
	        <audio className="audio__container" id="audio" preload="auto" volume="0.1" loop controls autoPlay controlsList="nodownload">
			  	<source src={this.props.url} type="audio/mp3"/>
			</audio>
	    );
	}
}

export default Audio;