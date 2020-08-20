const cors = require("cors");

Object.assign(module.exports, {
    useCors
});

function useCors(app) {
    app.use(cors());
}