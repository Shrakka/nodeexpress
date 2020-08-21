module.exports = init;

function init(script) {
    const scriptLauncher = require("../launcher");

    scriptLauncher.loadEnvironmentVariables();
    scriptLauncher.loadGlobalVariables();
    scriptLauncher.initDatabase(script, { closeAfterCallback: true });
}
