import inquirer from 'inquirer';
const babysitter = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'startTime',
    message: 'Enter Number:'
  }])
}

export default babysitter;