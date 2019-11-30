import React from 'react';
import Home from './Components/Home/Home';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Payment from './Components/Payment/Payment'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/payment" exact component={Payment} />

    </Router>
   
  );
}

export default App;
