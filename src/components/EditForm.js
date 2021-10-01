import React from 'react'

const EditForm = (props) => {
  const initialState ={
    name: "",
    description: "",
    source: "",
    cost: 0,
    date: Date.now,
  };

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
        <input type="submit" value="Edit Party" />
        </form>

    </div>
  )
}



export default EditForm;
