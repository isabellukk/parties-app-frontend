import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NewForm from './components/NewForm'
import PartyList from './components/PartyList'
import PartyDetail from './components/PartyDetail'
import EditForm from './components/EditForm'

function App() {

  return (
    <>
    <h1>PARTIES! YAY!</h1>
      <Router>
        <Switch>
          <Route exact path="/parties/new" render={(routerProps)=> <NewForm {...routerProps }/> } />
          <Route exact path="/parties" component={PartyList} />
          <Route exact path="/parties/:id" render={(routerProps) => <PartyDetail {...routerProps} />} />
          <Route exact path="/parties/:id/edit" render={(routerProps) => <EditForm {...routerProps} />}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
