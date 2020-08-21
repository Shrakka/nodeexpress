Object.assign(module.exports, {
    initDatabase
});

function initDatabase(cb, { closeAfterCallback = false } = {}) {
    const database = require("../database");

    database.connect(async (err) => {
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

        await cb();

        if (closeAfterCallback) {
            database.close(() => {
                process.exit(0);
            });
        }
    });
}
