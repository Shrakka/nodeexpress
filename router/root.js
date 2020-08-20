const router = require("express").Router();

router.get("/", md.send("Welcome to API"));

Object.assign(module.exports, {
    router
});
