var inquirer = require('inquirer');
var fs = require('fs');


const promptUser = (answers) =>
  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is your title?",
    },
    {
      name: "description",
      type: "input",
      message: "what is your description?",
    },
    {
      name: "TOC",
      type: "input",
      message: "Table of contents title?",
    },
    {
      name: "installation",
      type: "input",
      message: "What would you like for Installation?",
    },
    {
      name: "usage",
      type: "input",
      message: "What would you like for usage?",
    },
    {
      name: "license",
      type: "input",
      message: "What would you like for license?",
    }
  ])


const generateReadME = (answers) => {
   return `# ${answers.title}
 ## ${answers.TOC}
- [About the Project](#About-the-Project)
- [Usage](#Usage)
- [Installation](#Installation)
- [License](#License) 
## About the Project  
${answers.description}
## Usage  
${answers.usage}   
### Installation  
${answers.installation}  
## License
${answers.license}
## Questions
For any questions, please reach out to <Camslens@gmail.com>  
[Developer repo](http://github.com/Chickey49)`
}

promptUser()
  .then((answers) => fs.writeFileSync('README.md', generateReadME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));

