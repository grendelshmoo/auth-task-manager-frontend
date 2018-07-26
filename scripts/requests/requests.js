const axios = require('axios')
baseURL = `https://atm-server-g92.herokuapp.com/api`
const token = localStorage.getItem('token')

function createTask(newTitle, newDesc, listId) {
  return axios({
      url: `${baseURL}/lists/${listId}/tasks`,
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {
        title: newTitle,
        description: newDesc,
        list_id: listId
      },
      method: 'POST'
    })
    .catch(console.log)
}

function createNewList(newTitle) {
  return axios({
      url: `${baseURL}/lists`,
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {
        title: newTitle
      },
      method: "POST"
    })
    .catch(console.log)
}

function update(id, body) {
  return axios.put(`${baseURL}/posts/${id}`, body)
}

function destroy(id) {
  return axios.delete(`${baseURL}/posts/${id}`)
}


// LOG IN
function loginPost(email, password) {
  return axios.post(`${baseURL}/users/login`, {
    email,
    password
  })
}


// SIGNUP
function signup(firstName, lastName, email, password) {
  return axios.post(`${baseURL}/users/signup`, {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password
  })
}

// TASK LIST
function taskList() {
  return axios.get(`${baseURL}/lists`)
}


module.exports = {
  createTask,
  update,
  destroy,
  loginPost,
  signup,
  createNewList
}