Object.assign(module.exports, {
    loadEnvironmentVariables
});

function loadEnvironmentVariables() {
    require("dotenv").config();
}
