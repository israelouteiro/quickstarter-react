import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import Login from './pages/Login/Login'; 
import About from './pages/About/About'; 
import Forgot from './pages/Forgot/Forgot'; 
import Home from './pages/Home/Home'; 
import NewPassword from './pages/NewPassword/NewPassword'; 
import NotFound from './pages/NotFound/NotFound'; 


ReactDOM.render(
	<BrowserRouter basename="/quickstarter-react">
        <Switch>
            <Route path="/" exact={true} component={ Login } />
            <Route path="/about" component={ About } />
            <Route path="/forgot" component={ Forgot } />
            <Route path="/home" component={ Home } />
            <Route path="/new_password/:id" component={ NewPassword } />
            <Route path="*" component={ NotFound } />
        </Switch>
    </ BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
