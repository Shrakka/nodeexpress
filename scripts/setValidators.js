const init = require("./init");
const { schemas } = require("./schemas");

init(setValidators);

async function setValidators() {
    const commands = _.map(schemas, (schema, collectionName) => ({
        collMod: collectionName,
        validator: { $jsonSchema: schema },
        validationLevel: "strict",
        validationAction: "error"
    }));
    await Promise.all(commands.map((command) => _db.command(command)));
}
