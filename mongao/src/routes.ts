import { TodoController } from './controller';
import { Request, Response } from "express";
import { Application } from "express";
export class Routes {
    public todoController: TodoController = new TodoController()
    public routes(app: Application): void {

        app.route('/posts')
            // GET endpoint
            .get(this.todoController.getTodos)
            // POST endpoint
            .post(this.todoController.addNewTodo);
        // ToDo get, put and delete a specific todo
        app.route('/posts/:id')
            // get specific todo
            .get(this.todoController.getContactWithID)
            // PUT endpoint
            .put(this.todoController.updateTodo)
            // DELETE endpoint
            .delete(this.todoController.deleteContact);

        app.route('/posts/:id/likes')
            .post(this.todoController.updateTodo)

        app.route('/posts/:id/comments')
            .post(this.todoController.updateTodo)
    }
}