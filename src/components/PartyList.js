import React from "react";

function PartyList(props) {
  const { parties } = props;

  console.log(parties);

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
        </tr>)}
      </tbody>
    </table>
  )
}

export default PartyList;
