const request = require('../requests/requests')

function removeTask() {
    const removeBtns = Array.from(document.querySelectorAll('.remove'))
    removeBtns.map(btn => {
        btn.addEventListener('click', function (event) {
            const taskId = event.target.dataset.taskid
            const listId = parseInt(event.target.dataset.listid)
            request.destroyTask(listId, taskId)
                .then(response => {
                    const taskPage = require('../render/render-tasklist').taskPage
                    taskPage()
                })
                .catch(console.log)
        })
    })
}

module.exports = {
    removeTask
}