const PersonForm = ({handleSubmit, handleNameChange, handlePhoneChange, newName, newPhoneNumber}) => {
    return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone number: <input value={newPhoneNumber} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">Add/Update</button>
        </div>
      </form>
    )
}

export default PersonForm