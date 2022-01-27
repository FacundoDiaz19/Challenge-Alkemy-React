import React from 'react';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import routes from './Router/router';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
