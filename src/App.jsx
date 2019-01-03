import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import Home from './home.jsx'
import About from './About.jsx'
import chooseShop from './chooseShop.jsx'
import PopUp from './component/PopUp.jsx'
import Artists from './Artists/Artists.jsx'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/chooseShop" name='123' component={chooseShop} />
        <Route path="/PopUp" component={PopUp} />
        <Route path="/artists" component={Artists} />
      </Switch>
    </Router>
  )
}

export default App;