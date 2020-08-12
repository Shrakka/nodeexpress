const { buildMiddlewares } = require("./md");

Object.assign(module.exports, {
    md: buildMiddlewares()
});
