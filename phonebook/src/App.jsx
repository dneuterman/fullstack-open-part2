import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

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
        number: newPhoneNumber
      }
  
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewPhoneNumber('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={updatePhonebook}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => <li key={index}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App