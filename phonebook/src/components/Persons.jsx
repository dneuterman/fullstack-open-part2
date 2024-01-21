const Persons = ({ persons, nameFilter }) => {
    return (
        <>
        {
          persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
                  .map(person => <li key={person.id}>{person.name} {person.number}</li>)
        }
        </>
    )
}

export default Persons