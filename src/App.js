import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Menu from './components/header/Menu';
// import TopMenu from './components/header/TopMenu';

import Home from './components/pages/Home';
import Teams from './components/pages/Teams';
import Players from './components/pages/Players';
import News from './components/pages/News';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            sticky: undefined,
        }
        this.onScrollMenu = this.onScrollMenu.bind(this);
        window.addEventListener('scroll', this.onScrollMenu);
    }

    onScrollMenu() {
        const header = document.querySelector('header');
        const sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            this.setState({sticky: 'sticky'});
        } else {
            this.setState({sticky: undefined});
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <header className={this.state.sticky}>
                            <div className="menu__wrapper">
                                <Menu></Menu>
                            </div>
                        </header>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/teams" component={Teams} />
                            <Route path="/players" component={Players} />
                            <Route path="/news" component={News} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
    
}


export default App;
