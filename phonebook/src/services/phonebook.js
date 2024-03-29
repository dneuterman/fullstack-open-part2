import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addPerson = personObject => {
  const request = axios.post(baseUrl, personObject)
  return request.then(response =>  response.data)
}

const updatePerson = (personObject) => {
  const request = axios.put(`${baseUrl}/${personObject.id}`, personObject)
  return request.then(response => response.data)
}

const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, addPerson, updatePerson, deletePerson }