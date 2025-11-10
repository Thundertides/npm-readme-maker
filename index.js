#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";

async function main() {
  console.log("Welcome to README Generator");

  const answers = await inquirer.prompt([
    { name: "title", message: "Enter the title of your project:" },
    { name: "description", message: "Enter a description of your project:" },
    { name: "installation", message: "Enter installation instructions:" },
    { name: "usage", message: "Enter usage instructions:" },
    { name: "license", message: "Enter the license for your project:" },
    { name: "contributing", message: "Enter contribution guidelines:" },
    { name: "author", message: "Enter your name:" },
  ]);

  const content = `# ${answers.title}

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

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
