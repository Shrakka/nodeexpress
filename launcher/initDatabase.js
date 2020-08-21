Object.assign(module.exports, {
    initDatabase
});

function initDatabase(cb) {
    const database = require("../database");

    database.connect((err) => {
        if (err) {
            console.log("Unable to connect to database.");
            process.exit(1);
        }

        process.on("SIGINT", () => {
            database.close(() => {
                console.log("Disconnected from database.");
                process.exit(0);
            });
        });

        cb();
    });
}
