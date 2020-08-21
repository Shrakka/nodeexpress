const router = require("express").Router();
const controllers = require("./controllers");

router.get("/posts", md.send(controllers.getPosts));

router.post("/posts", md.send(controllers.createPost));

router.delete("/posts", md.send(controllers.deletePost));

Object.assign(module.exports, {
    router
});
