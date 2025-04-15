import { useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [filter, newFilter] = useState('')

  const handleClick = () => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons([...persons, { name: newName, numbers: newNumber }]);
    setNewName("");
    setNewNumber("0");
  };

  const hanldeOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const hanldeFilter = (event) => {
    newFilter(event.target.value);
  };

  const filterPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Form filter={filter} newName={newName} newNumber={newNumber} handleClick={handleClick} handleNumberChange={handleNumberChange} hanldeFilter={hanldeFilter} hanldeOnChange={hanldeOnChange}/>
      <Numbers filterPersons={filterPersons} />
    </div>
  );
};

export default App;
