import express from 'express'

import TodoController from './controllers/TodoController'

const routes = express.Router()

routes.get('/todo', TodoController.index)
routes.post('/todo', TodoController.store)
routes.put('/todo/:id', TodoController.update)
routes.delete('/todo/:id', TodoController.destroy)

export default routes
