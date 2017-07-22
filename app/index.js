let Generator = require('yeoman-generator');
let yosay = require('yosay');
let chalk = require('chalk');

module.exports = class extends Generator {

    prompting() {
        this.log(yosay(
            `Hey! It's yet another ${chalk.red('React Application Generator')}!`
        ));

        this.log("Howdy there! Let's build you a 🙌  React Single Page Application  🙌");
        this.log("‼️ Please make sure you're in the root directory of your project when running this generator ‼️");
        this.log('‼️ It is highly recommended you have "yarn" installed on your machine before starting ‼️');
        this.log('Visit this page for instructions on how to install yarn: https://yarnpkg.com/en/docs/install');
        this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of your project: '
            }
        ]).then( ({name}) => {
            name = name.trim();
            if(!name) {
                this.log('😱  Invalid name entered. Please restart the generator  😡');
                return;
            }

            this.log('💥 BAM! Let\'s do this! 👌');
            this.log(`Installing ${name} in directory: ${this.destinationRoot()}`);

        });
    }

}
