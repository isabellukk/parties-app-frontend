import React from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

function PartyDetail(props) {

  // console.log("props.match.params.id from party detail", props.match.params.id)
  // console.log("props from partydetail", props);

  const target = props.match.params.id;

  const [party, setParty] = useState({
  name: "",
  description: "",
  source: "",
  cost: 0,
  date: Date.now,
});


const [parties, setParties] = useState([])


const getPartiesToEdit = async () => {
  try {
    const parties = await fetch("http://localhost:9000/parties")
    if (parties.status === 200) {
      const parsedParties = await parties.json()
      if (Array.isArray(parsedParties)) {
        setParties(parsedParties)
      }
    }
  } catch(err) {
    console.log(err)
  }
}

  // useEffect(() => getParties(), [parties.length]);

// useEffect(()=>{
//   getParties()
// }, [])


  const getParty = async () => {
  try {
    const id = props.match.params.id;
    const foundParty = await fetch("http://localhost:9000/parties/" + id);
    if (foundParty.status === 200) {
      const parsedParty = await foundParty.json();
      setParty(parsedParty)
      console.log(parsedParty);
    }
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => getParty(), []);

  console.log(target)
  return (
    <>
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
        <tr>
          <td>{party.name}</td>
          <td>{party.description}</td>
          <td>{party.source}</td>
          <td>{party.cost}</td>
          <td>{party.date}</td>
        </tr>
      </tbody>
    </table>
    <Link to={`/parties/${party._id}/edit`}>Edit Party</Link>


    </>
  )
}
export default PartyDetail;
