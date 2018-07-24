const axios = require('axios')
const renderTaskList = require('./render-tasklist')
const templates = require('../templates/lists')
const tasklistTemplate = require('../templates/tasklist')


function getTasks(token, index = 0) {
  return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      const lists = res.data.lists
      console.log(lists)
      renderTaskList.renderTaskList(lists)
      renderTaskList.renderPopulateLists(lists)
    })
}



module.exports = {
  getTasks
}