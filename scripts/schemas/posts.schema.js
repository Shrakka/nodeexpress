const schema = {
    bsonType: "object",
    required: ["content", "createdAt"],
    additionalProperties: false,
    properties: {
        _id: {
            bsonType: "objectId"
        },
        content: {
            bsonType: "string",
            description: "content must be provided"
        },
        createdAt: {
            bsonType: "string",
            description: "createdAt must be provided"
        }
    }
};

module.exports = schema;
