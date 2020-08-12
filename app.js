// NODE MODULES
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// CONFIGURATION FILES
require("./globals");
const { port } = require("./config");
const database = require("./database");

// ROUTES
const { router: rootRouter } = require("./modules/root/router");
const { router: blogRouter } = require("./modules/blog");

// DEFINE APP
const app = express();
app.use(cors());
app.use("/", rootRouter);
app.use("/blog", blogRouter);

// START DATABASE AND APPLICATION
database.connect((err) => {
    if (err) {
        console.log("Unable to connect to database.");
        process.exit(1);
    }

    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });

    process.on("SIGINT", () => {
        database.close(() => {
            console.log("Disconnected from database.");
            process.exit(0);
        });
    });
});
