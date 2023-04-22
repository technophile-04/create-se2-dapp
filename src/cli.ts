#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("create-se2-dapp", {
  templateRoot,
  extra: {
    initialGreeting: {
      type: "input",
      describe: "Set the initial greeting for YourContract.sol :",
      prompt: "if-no-arg",
    },
  },
  promptForTemplate: true,
  after: async ({ answers }) => {
    console.log(
      `The initial greetings is set to "${answers.initialGreeting}" in YourContract.sol`
    );
  },
  promptForAuthor: false,
  promptForDescription: false,
  promptForEmail: false,
  promptForLicense: false,
  promptForPackageManager: false,
  caveat: ({ name }) => {
    return `
    cd ${name}
    Thanks for using Scaffold-ETH 2!     
    `;
  },
});
