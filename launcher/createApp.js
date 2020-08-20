Object.assign(module.exports, {
    createApp
});

function createApp() {
    const express = require("express");
    return express();
}