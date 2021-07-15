import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
      <Router>
        <Switch>
          
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
