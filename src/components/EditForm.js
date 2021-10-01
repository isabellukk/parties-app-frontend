import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const EditForm = (props) => {
  const initialState ={
    name: "",
    description: "",
    source: "",
    cost: 0,
    date: Date.now,
  };
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState(initialState);

  const getPartyToEdit = async () => {
    try {
      const id = props.match.id;
      const foundParty = await fetch("http://localhost:9000/parties" + id);
      if (foundParty.status === 200) {
        const parsedParty = await foundParty.json();
      }
    } catch (err) {
      console.log(err);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, source, cost, date } = input;
    const update = { name, description, source, cost, date };
    const id = props.match.params.id;
  try {
    const config = {
      method: "PUT",
      body: JSON.stringify(update),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const updatedParty = await fetch( "http://localhost:9000/parties/" + id, config
  );
    const parsedParty = await updatedParty.json();
    props.history.push({ pathname: `/parties/${id}`, state: parsedParty });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value })

  const toggleDeleteModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  const deleteParty = async (id) => {
    try {
      const deletedParty = await fetch(
        `http://localhost:9000/books/${id}`,
        {
          method: "DELETE",
        }
      );
      const parsedDeletedParty = await deletedParty.json();
      props.history.push("/parties");
    } catch (err) {
      console.log(err);
    }
  }

useEffect(() => getPartyToEdit(), [])
  return (
    <div className="form-section">
        <form onSubmit={handleSubmit}>
        <legend>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
            />
        </legend>
        <legend>
            <label htmlFor="description">Description</label>
            <textarea
            id="description"
            name="description"
            onChange={handleChange}
            >
            {input.description}
            </textarea>
        </legend>
        <legend>
            <label htmlFor="source">Source</label>
            <input
            type="text"
            id="source"
            name="source"
            value={input.source}
            onChange={handleChange}
            />
        </legend>
        <legend>
            <label htmlFor="cost">Cost</label>
            <input
            type= "number"
            id="cost"
            name="cost"
            value={input.cost}
            onChange={handleChange}
            />
        </legend>
        <legend>
            <label htmlFor="date">Date</label>
            <input
            type= "date"
            id="date"
            name="date"
            value={input.date}
            onChange={handleChange}
            />
        </legend>
        <button onClick={() => props.history.goBack()}>Go Back</button>
        <input type="submit" value="Edit Party" />
        <button onClick={toggleDeleteModal}>Delete Party</button>
        </form>
      {showModal ? (
        <div>
          <h1>Confirm Deletion</h1>
          <h3>Are you sure you want to delete this</h3>
          <div>
            <button onClick={() => deleteParty(input._id)}>Confirm</button>
            <button onClick={toggleDeleteModal}>Cancel</button>
          </div>
        </div>
      ) : null}

    </div>
  )
}



export default EditForm;
