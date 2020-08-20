const router = require("express").Router();
const controllers = require("./controllers");

router.get("/posts", md.send(controllers.getPosts));

router.post("/posts", md.send(controllers.createPost));

Object.assign(module.exports, {
    router
});
