// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'Licensed under the [MIT License](https://opensource.org/licenses/MIT).';
  }
  if (license === 'Apache 2.0') {
    return 'Licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
  }
  if (license === 'GPL 3.0') {
    return 'Licensed under the [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0).';
  }
  if (license === 'BSD 3-Clause') {
    return 'Licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).';
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
