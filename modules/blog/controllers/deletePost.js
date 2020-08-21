Object.assign(module.exports, {
    deletePost
});

async function deletePost(req) {
    const postId = new ObjectId(req.body._id);

    await _db.collection("posts").deleteOne({ _id: postId });

    return {};
}
