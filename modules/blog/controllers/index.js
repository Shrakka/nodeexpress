const { createPost } = require("./createPost");
const { deletePost } = require("./deletePost");
const { getPosts } = require("./getPosts");

Object.assign(module.exports, {
    createPost,
    deletePost,
    getPosts
});
