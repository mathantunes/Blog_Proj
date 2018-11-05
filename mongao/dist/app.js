"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
// src/app.ts
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// App class
class App {
    // the constructor
    constructor() {
        this.mongoUrl = 'mongodb://localhost/ToDodb';
        this.routes = new routes_1.Routes();
        // instantiate (but not run!) the application
        this.app = express();
        // configure it
        this.config();
        // associate with the app
        this.routes.routes(this.app);
        // configure MongoDB
        this.mongoSetup();
    }
    // to configure the app
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }
    mongoSetup() {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
// export a new App object
// default is a keyword of ES6 -> avoid {} in import
exports.default = new App().app;
//# sourceMappingURL=app.js.map