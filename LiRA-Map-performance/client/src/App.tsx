

import { FC } from "react";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import Navbar from './Components/Navigation'
import Rides from '../src/Components/Dashboard/Dashboard'
//import SignUpForm from './Components/Login/SignUpForm'
import Settings from "./Components/Settings";
import Notifications from "../src/Components/Notifications/Notifications"


import "./App.css";



const App: FC = () => {


    return (
        <div className="App">
            <Router> 
                <Navbar />
                <Switch>
                    <Route exact path="/dashboard" component={() => <Rides />} />
                    <Route exact path="/settings" component={() => <Settings />} />
                    <Route exact path="/notifications" component={() => <Notifications />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

