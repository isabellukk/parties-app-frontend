import React, {useState, useEffect} from 'react'
import './App.css';
import NewForm from './components/NewForm'

function App() {

  const [parties, setParties] = useState([])

  const newParty = async (data) => {
  try {
    const config = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const createdParty = await fetch(
      "http://localhost:9000/parties/",
      config
    );
    const parsedParty = await createdParty.json();
    console.log(parsedParty)
    setParties([...parties, parsedParty])
  } catch (err) {
    console.log(err);
  }
};

  const getParties = async () => {
    try {
      const parties = await fetch("http://localhost:9000/parties")
      const parsedParties = await parties.json()
      setParties(parsedParties)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getParties()
  }, [])

  return (
    <>
        <h1>PARTIES! YAY!</h1>
          <NewForm addParty={newParty}/>
              <table>
                <thead>
                  <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Source</th>
                  <th>Cost</th>
                  <th>Date</th>
                </tr>
              </thead>

                <tbody>
                {parties && parties.map(party=>
                  <tr>
                    <td>{party.name}</td>
                    <td>{party.description}</td>
                    <td>{party.source}</td>
                    <td>{party.cost}</td>
                    <td>{party.date}</td>
                  </tr>)}
                </tbody>
              </table>
        </>
  );
}

export default App;
