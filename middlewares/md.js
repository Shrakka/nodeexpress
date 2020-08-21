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
            let resource;
            try {
                resource = await controllerOrResource(req, res);
            } catch (error) {
                res.status(500).send({
                    error,
                    stack: error.stack
                });
            } finally {
                res.send(resource);
            }
        } else {
            res.send(controllerOrResource);
        }
    };
}
