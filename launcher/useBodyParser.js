Object.assign(module.exports, {
    useBodyParser
});

function useBodyParser(app) {
    const bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
}
