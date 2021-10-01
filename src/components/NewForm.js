import React, { useState, useEffect } from "react";

const NewForm = (props) => {
  const initialState = {
    name: ''
  }

  const [input, setInput] = useState(initialState)

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const newParty = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const createdParty = await fetch("http://localhost:9000/parties", configs)
      const parsedParty = await createdParty.json()
      console.log(parsedParty)
      props.history.push('/parties')
      // props.setBooks([...props.books, parsedBook])
      } catch(err) {
        console.log(err)
      }
    }



  const handleSubmit = async (e) => {
    e.preventDefault();
    newParty(input)
  };
//   const handleSubmit = async (newParty) => {
//   try {
//     const config = {
//       method: "POST",
//       body: JSON.stringify(newParty),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//
//     const createdParty = await fetch(
//       "http://localhost:9000/parties/",
//       config
//     );
//     const parsedParty = await createdParty.json();
//     console.log(parsedParty)
//     if (parsedParty) {
//       props.history.push('/parties')
//     }
//   } catch (err) {
//     console.log(err);
//     props.history.push('/parties')
//   }
// };

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
