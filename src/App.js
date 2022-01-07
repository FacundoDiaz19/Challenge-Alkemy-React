import React from 'react';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import routes from './Router/router';

// url: https://gateway.marvel.com:443/v1/public/characters?apikey=6da83076eb9a1ff375d6a8028ff4c981
// 17733ab9791c94e985df0ded4b8c5501884027ae76da83076eb9a1ff375d6a8028ff4c981
// hash: fbd14a4d5362e768583c77e38aebccc0

//url: url: https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6da83076eb9a1ff375d6a8028ff4c981&hash=fbd14a4d5362e768583c77e38aebccc0

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
