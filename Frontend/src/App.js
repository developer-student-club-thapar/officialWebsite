/** @format */

import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TestAxios from './pages/TestAxios';
import Home from './pages/Home';
import Nav from './components/Nav';
import Team from './pages/Team';
import About from './pages/About';
import Achievments from './pages/Achievments';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Router>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/achievments">
            <Achievments />
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/testAxios">
            <TestAxios />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/* <nav>
<ul>
	<li>
		<Link to="/">Home</Link>
	</li>
	<li>
		<Link to="/about">About</Link>
	</li>
	<li>
		<Link to="/users">Users</Link>
	</li>
</ul>
</nav> */

// <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer">
//                     Learn React
//                 </a>
//             </header>
//         </div>
