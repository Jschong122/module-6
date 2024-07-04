import { useState } from "react";

export function AddCatForm({ onFormSubmit }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCat = { name, latinName };
    onFormSubmit(newCat);
    setName("");
    setLatinName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="latinName"
        placeholder="Latin Name"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
      />
      <button type="submit">Add Cat</button>
    </form>
  );
}
