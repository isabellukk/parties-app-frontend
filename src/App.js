import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NewForm from './components/NewForm'
import PartyList from './components/PartyList'
import PartyDetail from './components/PartyDetail'

function App() {

  return (
    <>
    <h1>PARTIES! YAY!</h1>
      <Router>
        <Switch>
          <Route exact path="/parties/new" render={(routerProps)=> <NewForm {...routerProps }/> } />
          <Route exact path="/parties" component={PartyList} />
          <Route exact path="/parties/:id" render={(routerProps) => <PartyDetail {...routerProps} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
