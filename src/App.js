import React from 'react';
import State from './context/state'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import Demo from './components/pages/demo';

function App() {
  return (
    <State>
      <Router>
        <Switch>
          <Route exact path="/">
            <Demo/>
          </Route> 
        </Switch>
      </Router>
    </State>
  );
}

export default App;
