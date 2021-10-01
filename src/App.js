import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NewForm from './components/NewForm'
import PartyList from './components/PartyList'
import PartyDetail from './components/PartyDetail'

function App() {

  const [parties, setParties] = useState([])



  const getParties = async () => {
    try {
      const parties = await fetch("http://localhost:9000/parties")
      const parsedParties = await parties.json()
      setParties(parsedParties)
    } catch(err) {
      console.log(err)
    }
  }

  // const deleteParty = async (id) =>{
  //    try{
  //     const deletedParty = await fetch("http://localhost:9000/parties/"+id, {
  //       method: 'DELETE'
  //     })
  //     const parsedParty = await deletedParty.json()
  //     console.log(parsedParty)
  //     const updatedParties = parties.filter(party=>party._id !== parsedParty._id)
  //     // return a new array where all of the holiday ids do not match the recently deleted holiday id.
  //     // [ .... ]
  //     setParties(updatedParties)
  //    }catch(err){
  //      console.log(err)
  //    }
  // }

  useEffect(()=>{
    getParties()
  }, [])

  return (
    <>
    <h1>PARTIES! YAY!</h1>
      <Router>
        <Switch>
          <Route path="/parties/new" render={(routerProps)=> <NewForm {...routerProps }/> } />
          <Route path="/parties" render={() => <PartyList parties={parties} /> }/>
          <Route path="/parties/:id" render={(routerProps) => <PartyDetail {...routerProps} />} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
