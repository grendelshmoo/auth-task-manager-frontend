const request = require('../requests/requests')

function mapRemoveList() {
    const removeButtons = Array.from(document.querySelectorAll('#remove-list-button'))
    removeButtons.map(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation()
            let listId = e.target.dataset.id
            request.destroyList(listId)
                .then(response => {
                    const taskPage = require('../render/render-tasklist').taskPage
                    taskPage()
                })
                .catch(console.log)
        })
    })
}

module.exports = {
    mapRemoveList
}