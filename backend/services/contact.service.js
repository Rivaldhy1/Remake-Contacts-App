import axios from 'axios'

export const getContact = (callback) => {
  axios
    .get('http://localhost:8082/api/contacts')
    .then((res) => {
      callback(res.data.contact)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getContactById = (id, callback) => {
  axios(`http://localhost:8082/api/contacts/${id}`)
    .then((res) => {
      callback(res.data.data)
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

export const addContact = async (contactData) => {
  try {
    const response = await axios.post(
      'http://localhost:8082/api/contacts',
      contactData
    )
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
