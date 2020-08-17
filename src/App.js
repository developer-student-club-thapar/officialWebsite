import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Project from "./pages/Project";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import Recruitments from "./pages/Recruitments";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <Router>
      <div className="App">
        <MobileNav />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/recruitments" component={Recruitments} />
        </Switch>
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
