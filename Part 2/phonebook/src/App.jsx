import { useEffect, useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {

  const [persons, setPersons] = useState([]);
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

 //console.log(persons);
  


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
      <h2>Phonebook</h2>
      <Filter filter={filter} hanldeFilter={hanldeFilter} />
      <Form newName={newName} newNumber={newNumber} handleClick={handleClick} handleNumberChange={handleNumberChange} hanldeOnChange={hanldeOnChange}/>
      <Numbers filterPersons={filterPersons} />
    </div>
  );
};

export default App;
