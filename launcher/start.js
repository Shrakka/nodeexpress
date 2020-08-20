Object.assign(module.exports, {
    start
});

function start(app) {
    const { port } = require("../config");
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}
