Object.assign(module.exports, {
    createPost
});

async function createPost(req) {
    const { insertedId } = await _db.collection("posts").insertOne(req.body);
    return _db.collection("posts").findOne({ _id: insertedId });
}
