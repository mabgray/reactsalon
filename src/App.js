import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import About from './components/AboutComponent';
import Home from './components/HomeComponent';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Salon Name</NavbarBrand>
                    <NavbarBrand href="/about">
                        About Us
                    </NavbarBrand>
                
                </div>


                </Navbar>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home" component={Home}/>
                            
                        <Route path="/about" component={About} />
                           <Redirect to="/home"/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;