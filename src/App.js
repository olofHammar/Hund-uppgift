import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Welcome from './components/Home';
import Dogs from './components/Dogs';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home}/>
      <Route path="/dogs" component={Dogs}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
