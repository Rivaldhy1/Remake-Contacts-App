import axios from 'axios'

export const getContact = (callback) => {
  axios
    .get('http://localhost:8082/api/contacts')
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getContactById = (id, callback) => {
  axios(`http://localhost:8082/api/contacts/${id}`)
    .then((res) => {
      callback(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8082/api/contacts/${id}`
    )
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
