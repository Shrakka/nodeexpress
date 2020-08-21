/* eslint-disable import/newline-after-import */

const _ = require("lodash");
global._ = _;

const { ObjectId } = require("mongodb");
global.ObjectId = ObjectId;

const { md } = require("./middlewares");
global.md = md;

// _db is defined in "database.js" when connexion is set during app bootstrap
