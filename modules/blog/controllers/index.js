const { getPosts } = require("./getPosts");
const { createPost } = require("./createPost");

Object.assign(module.exports, {
    createPost,
    getPosts
});
