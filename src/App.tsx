import React from "react";
import { Register } from "./components/Register";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import { ListContainer } from "./components/ListContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/list">
          <ListContainer />
        </Route>
        <Route path="/">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
