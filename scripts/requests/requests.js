const axios = require('axios')
baseURL = `https://atm-server-g92.herokuapp.com`

function getAll() {
  return axios.get(`${baseURL}/posts`)
}

function getOne(id) {
  return axios.get(`${baseURL}/posts/${id}`)
}

function create(title, content) {
  return axios.post(`${baseURL}/posts/`, {
    title,
    content
  })
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



module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,

  loginPost
}