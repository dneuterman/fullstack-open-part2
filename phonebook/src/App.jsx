import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [notificationMessage, setNotificationMessage] = useState({
    message: null,
    messageType: 'success'
  });

  const fetchPersons = () => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(fetchPersons, [])

  const generateMessage = (message, messageType) => {
    setNotificationMessage({...notificationMessage, message: message, messageType: messageType})
    setTimeout(() => {
      setNotificationMessage({...notificationMessage, message: null})
    }, 5000)
  }

  const updatePhonebook = (event) => {
    event.preventDefault();
    const foundPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (foundPerson) {
      if (newPhoneNumber === '') {
        alert(`Please enter a phone number if you would like to update the phone number of ${foundPerson.name}`);
      } else {
        if (window.confirm(`Would you like to update the phone number of ${foundPerson.name}?`)) {
          const changedPerson = { ...foundPerson, number: newPhoneNumber}
          phonebookService.updatePerson(changedPerson).then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            setNewName('')
            setNewPhoneNumber('')
          })
        }
      }
    } else {
      if (newPhoneNumber === '') {
        alert('Please enter a phone number to add new person to the phonebook')
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
          generateMessage(`Added ${returnedPerson.name} to the Phonebook`, 'success');
        })
    }
  }

  // simple callback function to handle all the set useState functions
  const handleInputChange = (event, callback) => {
    callback(event.target.value);
  }

  const handleDelete = person => {
    if (window.confirm(`Delete ${person.name} from the phonebook?`)) {
      phonebookService
        .deletePerson(person.id)
        .then(returnedPerson => {
          console.log(`${returnedPerson.name} has been deleted`)
          const newPhonebook = persons.filter(person => person.id !== returnedPerson.id)
          setPersons(newPhonebook)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationMessage={notificationMessage} />
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
        <Persons persons={persons} nameFilter={nameFilter} handleDelete={handleDelete}/>
      </ul>
    </div>
  )
}

export default App