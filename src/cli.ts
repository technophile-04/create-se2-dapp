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
  promptForLicense: false,
  promptForPackageManager: false,
  extra: {
    initialGreeting: {
      type: "input",
      describe: "Set the initial greeting for YourContract.sol :",
      default: "Building Unstoppable Apps with Scaffold-ETH 2",
      prompt: "if-no-arg",
    },
  },
  defaultTemplate: "se-2-hardhat",
  promptForTemplate: true,
  defaultPackageManager: "yarn",
  after: async ({ answers }) => {
    console.log(
      `The initial greetings is set to "${answers.initialGreeting}" in YourContract.sol`
    );
  },
  caveat: ({ name }) => {
    return `
    ${chalk.bold.green("Congratulations!")} Your project has been scaffolded! 🎉
    \n
    ${chalk.bold("Next steps:")}
    1. cd ${name}
    2. yarn start
    \n
    ${chalk.bold.green("Thanks for using Scaffold-ETH 2 🙏, Happy Hacking!")}
    `;
  },
});
