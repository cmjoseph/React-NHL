import React from 'react';
import Slider from '../slider/Slider';

class Home extends React.Component {

    constructor(){
        super();
        
        this.images = [
            'https://picsum.photos/400/300/?image=926',
            'https://picsum.photos/400/300/?image=925',
            'https://picsum.photos/400/300/?image=924',
            'https://picsum.photos/400/300/?image=923',
            'https://picsum.photos/400/300/?image=922',
            'https://picsum.photos/400/300/?image=921',
        ];
        
        const hasOwn = {}.hasOwnProperty;

        const classNames = (...args) => {
            var classes = [];

            for (let i = 0; i < args.length; i++) {
                let arg = args[i];
                if (!arg) continue;

                let argType = typeof arg;

                if (argType === 'string' || argType === 'number') {
                    classes.push(arg);
                } else if (Array.isArray(arg) && arg.length) {
                    let inner = classNames.apply(null, arg);
                    if (inner) {
                        classes.push(inner);
                    }
                } else if (argType === 'object') {
                    for (let key in arg) {
                        if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
                            classes.push(key);
                        }
                    }
                }
            }

            return classes.join(' ');
        }
    }


    render(){
        return (
            <div className="home__template">
                <h1>Home</h1>
                <Slider images={this.images} />
            </div>
        );
    }
}

export default Home;