const request = require('../requests/requests')
const taskPage = require('../render/render-tasklist').taskPage


function completeTask(listId, taskId) {
    return request.finishTask(listId, taskId)
        .then(response => {
            taskPage()
        }).catch(console.log)
}

module.exports = {
    completeTask
}