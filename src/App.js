import React from "react";
import nav from "./components/nav";
import footer from "./components/footer";
import Homepage from "./pages/homepage";
import { Switch, Route } from "react-router-dom";
import about from "./pages/about";
import "./sytles/style.css";

function App() {
  return (
    <div className="App">
      <nav />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/about" exact>
          <about />
        </Route>
      </Switch>
      <footer />
    </div>
  );
}

export default App;
