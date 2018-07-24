const axios = require('axios')
baseURL = `https://atm-server-g92.herokuapp.com/api`
const token = localStorage.getItem('token')


function getAll() {
  return axios.get(`${baseURL}/posts`)
}

function getOne(id) {
  return axios.get(`${baseURL}/posts/${id}`)
}

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

function update(id, body) {
  return axios.put(`${baseURL}/posts/${id}`, body)
}

function destroy(id) {
  return axios.delete(`${baseURL}/posts/${id}`)
}


// LOG IN
function loginPost(email, password) {
  return axios.post(`${baseURL}/api/users/login`, {
    email,
    password
  })
}



// SIGNUP
function singup(firstName, lastName, email, password) {
  return axios.post(`${baseURL}/api/users/login`, {
    firstName,
    lastName,
    email,
    password
  })
}

// TASK LIST
function taskList() {
  return axios.get(`${baseURL}/api/lists`)
}


module.exports = {
  getAll,
  getOne,
  createTask,
  update,
  destroy,
  loginPost
}
