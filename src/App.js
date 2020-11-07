import React from "react";
import { Repaso } from "./components/Repaso";
import { Home } from "./views/Home";
import { VistaPokemonDetalle } from "./views/VistaPokemonDetalle";
import { Contacto } from "./views/Contacto";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import { Hooks } from './components/Hooks';

//import { Contador } from "./components/Contador";
function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:id" component={VistaPokemonDetalle} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </Router> */}
      {/* <Contador /> */}
      <Repaso />
    </>
  );
}

export default App;
