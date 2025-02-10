// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![badge](https://img.shields.io/badge/License-${license}-yellow.svg)`

  // switch (license) {
  //     case 'MIT':
  //         return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  //     case 'GPLv3':
  //         return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  //     case 'Apache 2.0':
  //         return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)';
  //     case 'BSD 3-Clause':
  //         return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  //     default:
  //         return '';
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: 'https://opensource.org/license/MIT',
    GPL: 'https://www.gnu.org/licenses/gps-3.0.html',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    BSD: 'https://opensourse.org/licenses/BSD-3-Clause',
    ISC: 'https://opensourse.org/licenses/ISC',
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0.html',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause',
    ISC: 'https://opensource.org/licenses/ISC',
  };

  return licenseLinks[license] || '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.License)}
# ${data.Title}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
This application utilizes the [${data.License}](${data.licenseLink}) license.

## Contributing
${data.Contributing}

## Tests
${data.Tests}
`;
}

export default generateMarkdown;
