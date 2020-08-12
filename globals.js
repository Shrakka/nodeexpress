const _ = require("lodash");
const { md } = require("./middlewares");

global._ = _;
global.md = md;

// _db is defined in "database.js"
