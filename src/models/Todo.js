import mongoose, { Schema } from 'mongoose'

const TodoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('todos', TodoSchema)
