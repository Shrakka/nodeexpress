Object.assign(module.exports, {
    createPost
});

async function createPost(req) {
    return _db.collection("posts").insertOne(req.body);
}
