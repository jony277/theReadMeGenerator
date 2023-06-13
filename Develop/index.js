// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information for your project:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];


  function generateMarkdown(answers) {
    // Generate the content for each section
    const titleSection = `# ${answers.projectTitle}\n\n`;
    const descriptionSection = `## Description\n\n${answers.description}\n\n`;
    const tableOfContentsSection = `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [Questions](#questions)\n\n`;
    const installationSection = `## Installation\n\n${answers.installation}\n\n`;
    const usageSection = `## Usage\n\n${answers.usage}\n\n`;
    const licenseSection = `## License\n\nThis application is covered under the ${answers.license} license.\n\n`;
    const contributingSection = `## Contributing\n\n${answers.contributing}\n\n`;
    const testsSection = `## Tests\n\n${answers.tests}\n\n`;
    const questionsSection = `## Questions\n\nIf you have any questions, feel free to reach out to me via GitHub or email.\n\nGitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})\nEmail: ${answers.email}\n\n`;
  
    // Combine all sections into the readme
    const readmeContent =
      titleSection +
      descriptionSection +
      tableOfContentsSection +
      installationSection +
      usageSection +
      licenseSection +
      contributingSection +
      testsSection +
      questionsSection;
  
    return readmeContent;
  }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README.md file has been successfully generated!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(answers) {
    console.log(answers);
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  });
}


// Function call to initialize app
init();
