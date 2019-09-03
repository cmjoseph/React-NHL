import React from 'react';

class Modal extends React.Component {

	constructor(props){
        super(props);
        this.state = {
        	data: '',
        }
    }

    async componentDidMount() {
       await this.setState({data:this.props});
    }

	render(){
	 	return <div>{this.state.data}</div>;
	}
}

export default Modal;