// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailPage from './DetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/event" component={DetailPage} />
        {/* Add other routes here */}
        <Route path="/" exact>
          {/* Your home component or main content */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
