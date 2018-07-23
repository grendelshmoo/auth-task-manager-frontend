const axios = require('axios')
const renderTaskList = require('./render-tasklist').renderTaskList
const templates = require('../templates/lists')

function getTasks(token) {
  renderTaskList()
  return axios.get('https://atm-server-g92.herokuapp.com/api/lists', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      const lists = res.data.lists
      console.log(lists)

      // take the lists array, create new html from the template.
      let listView = lists.map(list => {
        return templates.listTemplate(list)
      }).join('')

      console.log(listView)
      // set to container
      document.getElementById('left-top').innerHTML = listView

    })
}

module.exports = {
  getTasks
}
