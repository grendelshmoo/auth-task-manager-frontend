const axios = require('axios')
baseURL = `https://atm-server-g92.herokuapp.com/api`



function createTask(newTitle, newDesc, listId) {
  return axios(`${baseURL}/lists/${listId}/tasks`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
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

function destroyList(id) {
  return axios(`${baseURL}/lists/${id}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'DELETE'
  })
  // .then(() => getTasks())
}

function finishTask(listId, taskId) {
  const body = {
    'completed': true
  }
  return axios.patch(`${baseURL}/lists/${listId}/tasks/${taskId}`, body, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}


function createNewList(newTitle) {
  return axios(`${baseURL}/lists`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: {
      title: newTitle
    },
    method: "POST"
  })
}

function destroyTask(listId, taskId) {

  return axios(`${baseURL}/lists/${listId}/tasks/${taskId}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'DELETE'
  })
  // .then(() => getTasks())

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
function tasksOfList() {
  return axios.get(`${baseURL}/lists`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}




module.exports = {
  createTask,
  destroyList,
  destroyTask,
  createNewList,
  tasksOfList,
  loginPost,
  signup,
  finishTask
}
