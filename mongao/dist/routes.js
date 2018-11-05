"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class Routes {
    constructor() {
        this.todoController = new controller_1.TodoController();
    }
    routes(app) {
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
            .post(this.todoController.updateTodo);
        app.route('/posts/:id/comments')
            .post(this.todoController.updateTodo);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map