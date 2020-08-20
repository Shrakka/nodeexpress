Object.assign(module.exports, {
    setRouter
});

function setRouter(app) {
    const { router } = require("../router");
    app.use("/", router);
}
