function listTemplate(list, isActive = '') {
  return `<a id="list-select" class="list-group-item list-group-item-action ${isActive}" data-id="${list.id}" data-toggle="list" href="#${list.id}" role="tab">${list.title}<span id="remove-list-button" class="badge badge-pill badge-danger pull-right">remove</span></a>`
}

module.exports = {
  listTemplate
}
