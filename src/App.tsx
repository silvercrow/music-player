import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import GlobalStyle from './Components/Templates/styles';
import EQMusicPlayer from './Pages/EQMusicPlayer';
import Guests from './Pages/Guests';
import Login from './Pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/guests">
          <Guests />
        </PrivateRoute>
        <PrivateRoute path="/">
          <EQMusicPlayer />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
