import Todo from '../models/Todo'

export default {
  async index(req, res) {
    const todos = await Todo.find()

    res.json(todos)
  },

  async store(req, res) {
    const { description, done } = req.body

    const todo = await Todo.create({
      description,
      done,
    })

    res.json(todo)
  },
  async destroy(req, res) {
    const { id } = req.params

    const todoExists = await Todo.findById(id)

    if (!todoExists) {
      return res.status(404).json({ error: 'todo not found' })
    }

    await Todo.deleteOne({ _id: id })

    res.json({})
  },

  async update(req, res) {
    const { id } = req.params
    const { description, done } = req.body

    const todoExists = await Todo.findById(id)

    if (!todoExists) {
      return res.status(404).json({ error: 'todo not found' })
    }

    await Todo.updateOne(
      { _id: id },
      {
        description,
        done,
      }
    )

    res.json({ id, description, done })
  },
}
