const axios = require('axios')
const renderTaskList = require('./render-tasklist').renderTaskList
const templates = require('../templates/lists')
const tasklistTemplate = require('../templates/tasklist')


function getTasks(token, index = 0) {
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

      console.log('Hi, there. I am a list view', listView)
      // set to container
      document.getElementById('left-list').innerHTML += listView
      // populate the middle 
      lists.map(list => {
        const tasks = list.tasks
        tasks.map(task => {
          console.log('Iam a  task, look at me', task)
          const centerColumn = document.getElementById('center-column')
          const rightColumn = document.getElementById('right-column')

          if (!task.completed) {
            const singleCard = tasklistTemplate.doingCards(task.title, task.description, task.created_at)
            centerColumn.innerHTML += singleCard 
          } else {
            const singleCard = tasklistTemplate.completedCards(task.title, task.description, task.updated_at)
            rightColumn.innerHTML += singleCard 
          }
        })
      })

      const aTags = Array.from(document.querySelectorAll('a.list-group-item'))
      aTags.map(el => {
        el.addEventListener('click', (event) => {
          const listItemId = event.target.dataset.id
        })
      })
    })
}



module.exports = {
  getTasks
}