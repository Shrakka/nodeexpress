const { initDatabase } = require("./initDatabase");
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
        initDatabase,
        createApp,
        loadEnvironmentVariables,
        loadGlobalVariables,
        setRouter,
        start,
        useBodyParser,
        useCors
    };
}
