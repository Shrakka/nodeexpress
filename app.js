const appLauncher = require("./launcher");

appLauncher.loadEnvironmentVariables();
appLauncher.loadGlobalVariables();

const app = appLauncher.createApp();
appLauncher.useCors(app);
appLauncher.useBodyParser(app);

appLauncher.setRouter(app);
appLauncher.connectDatabase(() => appLauncher.start(app));
