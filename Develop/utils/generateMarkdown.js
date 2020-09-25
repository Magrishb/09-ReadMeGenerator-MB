// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ## Description
  ${response.description}

  ## Table of Contents
  ${response.TableofContents}

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  ${response.license}

  ## Contributing
  ${response.contributing}

  ## Testing
  ${response.test}

  ## Questions
  -[GitHub](https://github.com/${response.github})
  -[Email](${response.email})
`
}

module.exports = generateMarkdown;
