const express = require('express')
const Todo = require('./todo')

const router = express.Router()

// GET /todos
router.get('/', async (req, res) => {
  try {

    const { description } = req.query

    // se description existir, cria um filtro com expressão regular (case-insensitive)
    const filter = description
      ? { description: { $regex: description, $options: 'i' } }
      : {}

    const todos = await Todo.find(filter)
    res.json(todos)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST /todos
router.post('/', async (req, res) => {
  try {
    const todo = new Todo(req.body)
    await todo.save()
    res.status(201).json(todo)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// PUT /todos/:id
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(todo)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE /todos/:id
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(204).end()
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// PATCH /todos/:id/done/:value
router.patch('/:id/done/:value', async (req, res) => {
  try {
    const { id, value } = req.params

    const done = value === 'true'

    const todo = await Todo.findByIdAndUpdate(
      id,
      { done },
      { new: true, runValidators: true }
    )

    if (!todo) {
      return res.status(404).json({ error: 'Todo não encontrado' })
    }

    res.json(todo)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router