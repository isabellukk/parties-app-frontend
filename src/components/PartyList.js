import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

function PartyList(props) {
  // const { parties } = props;

  // console.log("props from partylist", props.match.params.id)
  // console.log("from parties", parties);

  const [parties, setParties] = useState([])

  const getParties = async () => {
  try {
    const parties = await fetch("http://localhost:9000/parties/");
    if (parties.status === 200) {
      const parsedParties = await parties.json();
      if (Array.isArray(parsedParties)) {
        setParties(parsedParties);
      }
    }
  } catch (err) {
    console.log(err);
  }
  };
  useEffect(() => getParties(), []);

  return (
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
          <td>
            <Link to={"/parties/" + party._id}>View Party</Link>
          </td>
        </tr>
      )}
      </tbody>
    </table>
  )
}

export default PartyList;
