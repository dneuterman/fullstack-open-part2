const Filter = ({ filterValue, handleChange }) => {
    return (
        <div>
            filter: <input value={filterValue} onChange={handleChange}></input>
        </div>
    )
}

export default Filter