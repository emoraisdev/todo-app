const todoService = require('../api/todo/todoService')

module.exports = (server) => {
  server.use('/api/todos', todoService)
}