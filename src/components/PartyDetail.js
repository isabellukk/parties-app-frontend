import React from "react";

function PartyDetail(props) {

  console.log("props.match.params.id from party detail", props.match.params.id)
  console.log("props from partydetail", props);

  const target = props.match.params.id;

  console.log(target)
  return (
      <h1>its a party</h1>
  )
}
export default PartyDetail;
