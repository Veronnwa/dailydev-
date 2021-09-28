import React from "react";
import GameScreen from './SimpleGame/GameScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DommyHome, DommySettings, DommyAbout, DommyContact, DommyServices} from './Components/github/TestComp/DommyHome'
import { HeaderNav } from './Components/github/TestComp/HeaderNav'
import LandingPage from "./Components/LandingPage";
import  GitHub from './Components/github/homeGithub';
import Project from "./NewProject/Project";

 const App = () => {
  return(
    //<div>
     //<GitHub />
    <Router> 
    <HeaderNav /> 
     <Switch>
     <Route path='/' exact component={DommyHome} /> 
     <Route path='/landingpage' exact component={LandingPage} />
     <Route path='/about' exact component={DommyAbout} />
     <Route path='/gamescreen' exact component={GameScreen} />
     <Route exact path="/project" component={Project} /> 
     <Route exact path="/github" component={GitHub} /> 
        
      </Switch> 
     </Router>
    //</div>
  );
};

export default App;