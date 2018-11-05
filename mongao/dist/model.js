"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;
exports.ContactSchema = new Schema({
    title: {
        type: String,
        required: 'Titulo'
    },
    subtitle: {
        type: String
    },
    url: {
        type: String
    },
    author: {
        type: String,
    },
    comments: {
        type: Array
    },
    likes: {
        type: Number
    },
    name: { type: String },
    description: { type: String }
});
//# sourceMappingURL=model.js.map