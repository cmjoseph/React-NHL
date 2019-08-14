import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/header/Menu';
import TopMenu from './components/header/TopMenu';

import Home from './components/pages/Home';
import Teams from './components/pages/Teams';
import Players from './components/pages/Players';
import News from './components/pages/News';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <header>
                            <div className="menu__wrapper">
                                <TopMenu></TopMenu>
                                <Menu></Menu>
                            </div>
                        </header>
                        <Route exact path="/" component={Home} />
                        <Route path="/teams" component={Teams} />
                        <Route path="/players" component={Players} />
                        <Route path="/news" component={News} />
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
