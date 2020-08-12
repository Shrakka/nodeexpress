const router = require("express").Router();
const controllers = require("./controllers");

router.get("/posts", md.send(controllers.getPosts));

Object.assign(module.exports, {
    router
});
