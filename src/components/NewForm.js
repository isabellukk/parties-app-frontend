import React, { useState, useEffect } from "react";

const NewForm = (props) => {
  const initialState = {
    name: ''
  }

  const [input, setInput] = useState(initialState)

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addParty(input);
    setInput(initialState);
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
