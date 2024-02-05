"use strict";

var _app = require("./app.js");
require("./database.js");
_app.app.listen(_app.PORT, function () {
  console.log("Server listening on port ".concat(_app.PORT));
});