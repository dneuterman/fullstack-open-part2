import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const updatePhonebook = (event) => {
    event.preventDefault();
    if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already in the phonebook.`);
      return
    }
    if (newPhoneNumber === '') {
      alert("Please enter a phone number");
      return
    }
      const nameObject = {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1
      }
  
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewPhoneNumber('');
  }

  // simple callback function to handle all the set useState functions
  const handleInputChange = (event, callback) => {
    callback(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <input type="text" value={nameFilter} onChange={(event) => handleInputChange(event, setNameFilter)}/>
      <h2>Add New Number</h2>
      <form onSubmit={updatePhonebook}>
        <div>
          name: <input value={newName} onChange={(event) => handleInputChange(event, setNewName)} />
        </div>
        <div>
          phone number: <input value={newPhoneNumber} onChange={(event) => handleInputChange(event, setNewPhoneNumber)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
                  .map(person => <li key={person.id}>{person.name} {person.number}</li>)
        }
      </ul>
    </div>
  )
}

export default App