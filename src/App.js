import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NameDetails from "./components/NameDetails";
//import Context from './context';
import SingleCocktail from './pages/SingleMention';

function App(props) {
  return (
    <Router>
    
      <div className="container bg-gradent-primary">
        App
        {/* <Search/> */}
        <header className="App-header">
                  <b>Skilly </b>
                  <NameDetails /> 
               
        </header>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route exact path ="/cocktail/:id">
           <SingleCocktail />
         </Route>
         
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
