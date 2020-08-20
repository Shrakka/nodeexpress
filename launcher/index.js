const { connectDatabase } = require("./connectDatabase");
const { createApp } = require("./createApp");
const { loadEnvironmentVariables } = require("./loadEnvironmentVariables");
const { loadGlobalVariables } = require("./loadGlobalVariables");
const { setRouter } = require("./setRouter");
const { start } = require("./start");
const { useBodyParser } = require("./useBodyParser");
const { useCors } = require("./useCors");

module.exports = buildAppLauncher();

function buildAppLauncher() {
    return {
        connectDatabase,
        createApp,
        loadEnvironmentVariables,
        loadGlobalVariables,
        setRouter,
        start,
        useBodyParser,
        useCors
    };
}
