const Persons = ({ persons, nameFilter, handleDelete }) => {
    return (
        <>
        {
          persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
                  .map(person => {
                    return (
                        <li key={person.id}>
                            {person.name} {person.number}
                            <button onClick={() => handleDelete(person)}>Delete</button>
                        </li>
                    )
                })
        }
        </>
    )
}

export default Persons