"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("./model");
// mongoose.Promise = global.Promise;
// Create model schema
const Todo = mongoose.model('Todo', model_1.ContactSchema);
// TodoController
class TodoController {
    // Use the express objects
    // add a new todo
    addNewTodo(req, res) {
        // Create a new todo
        let newTodo = new Todo(req.body);
        // Save todo
        newTodo.save((err, todo) => {
            if (err) {
                // If error saving -> send the cause
                res.send(err);
            }
            // Else send back the inserted record
            res.json(todo);
        });
    }
    // Get all todos
    getTodos(req, res) {
        Todo.find({}, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }
    // Get specific todo
    getContactWithID(req, res) {
        Todo.findById(req.params.id, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }
    // Update a todo
    updateTodo(req, res) {
        Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }
    // Delete a todo
    deleteContact(req, res) {
        Todo.deleteOne({ _id: req.params.id }, (err) => {
            if (err) {
                res.send(err);
            }
        });
    }
}
exports.TodoController = TodoController;
//# sourceMappingURL=controller.js.map