import React, {useState, useEffect} from 'react'
import './App.css';

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

  useEffect(()=>{
    getParties()
  }, [])

  return (
    <div>
      <h1>Parties App</h1>
    </div>
  );
}

export default App;
