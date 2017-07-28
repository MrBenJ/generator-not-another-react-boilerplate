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
            this.fs.copyTpl(
                this.templatePath('.'),
                this.destinationPath('.'),
                { name }
            );

            this._dotfiles(name);
            this.yarnInstall(undefined, undefined, () => {
                this.log('All done! Run "yarn start" and head to localhost:3000 to see documentation!');
                this.log('If you liked this generator, Give it a Star :D - @MrBenJ would love you forever ;)');
            });
        });

    }
    _dotfiles(name) {
            console.log('Copying dotfiles...');
            this.fs.copyTpl(
                this.templatePath('.babelrc'),
                this.destinationPath('.babelrc'),
                { name }
            );
            this.fs.copyTpl(
                this.templatePath('.env.dev'),
                this.destinationPath('.env.dev'),
                { name }
            )
            this.fs.copyTpl(
                this.templatePath('.env.prod'),
                this.destinationPath('.env.prod'),
                { name }
            )
            this.fs.copyTpl(
                this.templatePath('.eslintrc.json'),
                this.destinationPath('.eslintrc.json'),
                { name }
            );
            this.fs.copy(
                this.templatePath('gitignore'),
                this.destinationPath('.gitignore'),
                { name }
            );
        }

}
