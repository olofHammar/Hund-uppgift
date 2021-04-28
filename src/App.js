import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Dogs from './components/Dogs';
import Home from './components/Home';
import DogDetail from './components/DogDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Hund-uppgift" exact component={Home} />
      <Route path="/home" component={Home}/>
      <Route path="/dogs" exact component={Dogs}/>
      <Route path="/dogs/:id" component={DogDetail}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
