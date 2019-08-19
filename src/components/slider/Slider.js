import React from 'react';

class Slider extends React.Component {
    constructor(){
        super();

        this.state = {
            currentIndex: 0,
            isTransitioning: false,
            goingLeft: false
        };

    }

    componentDidMount() {
        window.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.onKeyUp);
    }

    onKeyUp = (e) => {
        if (e.keyCode) {
            if (e.keyCode === 39) {
                this.showNextSet();
            } else if (e.keyCode === 37) {
                this.showPrevSet();
            }
        }
    }

    showPrevSet = () => {
        const currentIndex = (this.state.currentIndex - 1 + this.props.images.length) % this.props.images.length;
        this.setState({ currentIndex });
    }
        
    showNextSet = () => {
        const currentIndex = (this.state.currentIndex + 1) % this.props.images.length;
        this.setState({ currentIndex });
    }

    render(){
        const { images } = this.props;
        const { currentIndex, isTransitioning, goingLeft } = this.state;
        return(
            <div className="slider__container">
                <h2>Slider</h2>
                <div className="carousel__wrapper">
                    <div className="carousel__container">
                        {images.map((img, index) => {
                            let className = 'carousel__image'
                            if (index === currentIndex) className += ' active';
                            
                            return <img src={img} className={className} key={`img-${index}`} />;
                        })}
                    </div>
                    <div className="carousel__controls">
                        <button className="carousel__button" onClick={this.showPrevSet}><i className="fa fa-arrow-left"></i></button>
                        <button className="carousel__button" onClick={this.showNextSet}><i className="fa fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;