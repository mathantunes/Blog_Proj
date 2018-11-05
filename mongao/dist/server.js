"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
// Import the app object
const app_1 = require("./app");
// Define a const for the port
const PORT = 3000;
// Start the server!
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map