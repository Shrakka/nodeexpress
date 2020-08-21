require("dotenv").config();
const database = require("../database");

database.connect(async (err) => {
    if (err) {
        console.log("Unable to connect to database.");
        process.exit(1);
    }

    await _db.command({
        collMod: "posts",
        validator: {
            $jsonSchema: {
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
            }
        },
        validationLevel: "strict",
        validationAction: "error"
    });

    database.close(() => {
        console.log("Disconnected from database.");
        process.exit(0);
    });
});
