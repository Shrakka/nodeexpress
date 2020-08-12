Object.assign(module.exports, {
    getPosts
});

async function getPosts() {
    return _db.collection("posts").find().toArray();
}
