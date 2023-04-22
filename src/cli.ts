#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";
import chalk from "chalk";
import { TITLE_TEXT } from "./consts";

const templateRoot = resolve(__dirname, "..", "templates");

console.log(chalk.bold.blue(TITLE_TEXT));

create("create-se2-dapp", {
  templateRoot,
  promptForAuthor: false,
  promptForDescription: false,
  promptForEmail: false,
  promptForPackageManager: false,
  defaultAuthor: "BuidlGuidl",
  defaultEmail: "",
  defaultLicense: "MIT",
  promptForLicense: false,
  // Skipping yarn install because its does not work correctly
  skipNpmInstall: true,
  extra: {
    initialGreeting: {
      type: "input",
      describe: "Set the initial greeting for YourContract.sol :",
      default: "Building Unstoppable Apps with Scaffold-ETH 2",
      prompt: "if-no-arg",
    },
    runYarn: {
      type: "confirm",
      describe: "Run yarn install after scaffolding app?",
      default: true,
      prompt: "if-no-arg",
    },
  },
  defaultTemplate: "se-2-hardhat",
  promptForTemplate: true,
  defaultPackageManager: "yarn",
  after: async ({ answers, run }) => {
    if (answers.runYarn) {
      console.log(chalk.bold.blue("🏗️ Running yarn install..."));
      console.log(`\n`);
      await run("yarn");
      console.log(`\n`);
      console.log(chalk.bold.green("✅ Done!"));
    }
  },
  caveat: ({ name, answers }) => {
    return `
    ${chalk.bold.green("Congratulations!")} Your project has been scaffolded! 🎉
    \n
    ${chalk.bold("Next steps:")}
    1. cd ${name}
    ${answers.runYarn ? "2. yarn start" : "2. yarn install"}
    \n
    ${chalk.bold.green("Thanks for using Scaffold-ETH 2 🙏, Happy Building!")}
    `;
  },
});
