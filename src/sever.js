import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

const server = express()

mongoose
  .connect(
    'mongodb+srv://natanael:natanaelvich1997@cluster0-gmth0.mongodb.net/todo_coder?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('connected to mongo')
  })
  .catch(() => {
    console.log('fail to connect mongo')
  })

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333, () => {
  console.log('port 3333')
})
