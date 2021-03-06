import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Store from './AppStore.js';
import App from './App.js';
import WelcomeView from './resources/stateless/WelcomeView';
import GameView from './resources/gameView/GameView';
import LibraryView from './resources/libraryView/LibraryView';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={WelcomeView}/>
        <Route path='/welcome' component={WelcomeView}/>
        <Route path='game/:fileName' component={GameView}/>
        <Route path='*' component={LibraryView} />
      </ Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
