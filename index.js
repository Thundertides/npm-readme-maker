#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";

async function main() {
  console.log("Welcome to README Generator");

  const answers = await inquirer.prompt([
    {
      name: "title",
      message: "Enter the title of your project:",
      default: "My Project",
    },
    {
      name: "description",
      message: "Enter a description of your project:",
      default: "A simple project.",
    },
    {
      name: "installation",
      message: "Enter installation instructions:",
      default: "npm install",
    },
    {
      name: "usage",
      message: "Enter usage instructions:",
      default: "npm start",
    },
    {
      name: "license",
      message: "Choose a license:",
      type: "list",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "Unlicense"],
    },
    {
      name: "contributing",
      message: "Enter contribution guidelines:",
      default: "Pull requests are welcome!",
    },
    { name: "author", message: "Enter your name:", default: "Anonymous" },
  ]);

  if (fs.existsSync("README.md")) {
    const { overwrite } = await inquirer.prompt([
      {
        type: "confirm",
        name: "overwrite",
        message: "README.md already exists. Overwrite?",
        default: false,
      },
    ]);
    if (!overwrite) {
      console.log(chalk.yellow("⚠️  Aborted. No changes made."));
      return;
    }
  }

  const content = `# ${answers.title}

## Description

${answers.description}

## Installation

\`\`\`bash
${answers.installation}
\`\`\`

## Usage

\`\`\`bash
${answers.usage}
\`\`\`

## License
${answers.license}

## Contributing
${answers.contributing}

## Author

${answers.author}
`;

  fs.writeFile("README.md", content, (err) => {
    if (err) throw err;
    console.log("README.md created successfully!");
  });
}

main();
