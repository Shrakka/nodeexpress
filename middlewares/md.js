Object.assign(module.exports, {
    buildMiddlewares
});

function buildMiddlewares() {
    return {
        send
    };
}

function send(controllerOrResource) {
    return async (req, res) => {
        if (_.isFunction(controllerOrResource)) {
            res.send(await controllerOrResource(req, res));
        } else {
            res.send(controllerOrResource);
        }
    };
}
