// PORT
const port = process.env.PORT || 5000;

// MONGO URI
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoProjectName = process.env.MONGO_PROJECT_NAME;
const mongoDatabaseName = process.env.MONGO_DATABASE_NAME;
const mongoUri = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.ulc0i.gcp.mongodb.net/${mongoProjectName}?retryWrites=true&w=majority`;

Object.assign(module.exports, {
    db: {
        uri: mongoUri,
        name: mongoDatabaseName
    },
    port
});