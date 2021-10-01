import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'


function PartyList(props) {
  const { parties } = props;

  // console.log("props from partylist", props.match.params.id)
  console.log("from parties", parties);

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
