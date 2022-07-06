const express = require("express");
const app = express();

require('./startup/routes')(app);
require('./startup/db')();

app.listen(8000, () => console.log("Listening on port 8000..."));
