import React from 'react';
import TinySlider from "tiny-slider-react";

class Slider extends React.Component {

    render(){
        const settings = {
            items: 3,
            lazyload: true,
            nav: false,
            mouseDrag: true,
            center: true,
        };

        this.images = [
            'https://picsum.photos/400/300/?image=926',
            'https://picsum.photos/400/300/?image=925',
            'https://picsum.photos/400/300/?image=924',
            'https://picsum.photos/400/300/?image=923',
            'https://picsum.photos/400/300/?image=922',
            'https://picsum.photos/400/300/?image=921',
        ];

        const loadingImage = null;
        const el = null;
        const imgStyles = null;

        return(
            <div className="slider__container">
                <h2>Slider</h2>
                <TinySlider settings={settings}>
                    {this.images.map((el, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <img
                          className={`tns-lazy-img`}
                          src={loadingImage}
                          data-src={el}
                          alt=""
                          style={imgStyles}
                        />
                      </div>
                    ))}
                </TinySlider>
            </div>
        );
    }
}

export default Slider;