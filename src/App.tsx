import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Root from 'components/Main';
import DefaultProps from 'components/DefaultProps'
import ConditionRender from 'components/ConditionalRender';
const App = () => {
  return (

    <Router>
      <Switch>
        <Route path="/conditionrender" exact component={ConditionRender}></Route>
        <Route path="/defaultprops" exact component={DefaultProps}></Route>
        <Route path="/" exact component={Root}></Route>
      </Switch>
    </Router>
  );
}

export default App;
