import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Root from 'components/Main';
const App = () => {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Root}></Route>
      </Switch>
    </Router>
  );
}

export default App;
