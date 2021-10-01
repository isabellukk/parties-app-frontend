import React, { useState, useEffect } from "react";

const NewForm = (props) => {
  const initialState = {
    name: ''
  }

  const [input, setInput] = useState(initialState)

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   props.addParty(input);
  //   setInput(initialState);
  // };
  const handleSubmit = async (newParty) => {
  try {
    const config = {
      method: "POST",
      body: JSON.stringify(newParty),
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
    if (parsedParty) {
      props.history.push('/parties')
    }
  } catch (err) {
    console.log(err);
    props.history.push('/parties')
  }
};
  return (
    <div className="form-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={input.name} onChange={handleChange} />
        <input type="submit" value="Add a reason to celebrate" />
      </form>
    </div>
  )
};

export default NewForm;
