import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const fetchPersons = () => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(fetchPersons, [])

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
      const personObject = {
        name: newName,
        number: newPhoneNumber
      }
  
      phonebookService
        .addPerson(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewPhoneNumber('');
        })
  }

  // simple callback function to handle all the set useState functions
  const handleInputChange = (event, callback) => {
    callback(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={nameFilter} handleChange={(event) => handleInputChange(event, setNameFilter)} />
      <h3>Add New Number</h3>
      <PersonForm
        handleSubmit={updatePhonebook}
        handleNameChange={(event) => handleInputChange(event, setNewName)}
        handlePhoneChange={(event) => handleInputChange(event, setNewPhoneNumber)}
        newName={newName}
        newPhoneNumber={newPhoneNumber} 
      />
      <h3>Numbers</h3>
      <ul>
        <Persons persons={persons} nameFilter={nameFilter}/>
      </ul>
    </div>
  )
}

export default App