import { extendConfig, internalTask, task } from "@nomiclabs/buidler/config";
// import { lazyObject } from "@nomiclabs/buidler/plugins";

export default function() {
  /* extend config */
  extendConfig((config, userConfig) => {
    if (userConfig.react == undefined) {
      config.react = {};
    }
    if (userConfig.paths?.react === undefined) {
      config.paths = { ...config.paths, react: "./frontend/src/buidler" };
    }
  });

  /* Add task */
  internalTask("react:run", "Run react component generation ")
    .addFlag("reset", "whether to delete deployments files first")
    .addFlag("log", "whether to output log")
    .addFlag("watch", "redeploy on every change of contract or deploy script")
    .setAction(async (args, bre) => {
      console.log("### React started ###");
    });

  task("react", "Create React component")
    .addFlag("reset", "whether to delete deployments files first")
    .addFlag("log", "whether to output log")
    .addFlag("watch", "regenerate React component on solidity file change")
    .setAction(async (args, bre) => {
      console.log(bre);
      await bre.run("react:run", args);
    });
}
