import React from 'react';

class Modal extends React.Component {

	constructor(props){
        super(props);
        this.state = {
        	data: '',
        }
    }

    componentDidMount() {
       this.setState({data:this.props});
    }

	render(){
	 	return <div>{this.state.data}</div>;
	}
}

export default Modal;