import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function App() {
  return (
    <Router>

      <>
        <Route exact path="/" component={Home} />
   
      </>
    </Router>
  );
}

export default App;
