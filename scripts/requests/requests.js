baseURL = `https://atm-server-g92.herokuapp.com/`

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

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}
