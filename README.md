# Not Another React Boilerplate!?
![Too many f***in boilerplates!](https://i.imgflip.com/1t743g.jpg)

Big complaints about React I've heard:
* Setup suuuuuucks
* Falling down the JS library rabbit hole (Oh! How about I include Redux and thunk and sass and styled-components and kitchen-sink and...
* Easy to forget something and totally botch up your production setup
* Many boilerplates are using outdated libraries and dependencies

## NOT ANYMORE!
Introducing **Not Another React Boilerplate!** - designed to make life easier by installing the basics of what a solid **Single Page React Application** needs!

**NOTE:** This boilerplate is meant for those who are already experienced with React and Redux. If you are just starting out and are trying to learn either React or Redux, don't use this boilerplate. Use [Create-React-App](https://github.com/facebookincubator/create-react-app) instead. It's MUCH easier to use this rather than the other 9,000,000 generators out there...

## Features and Pretty Things!
* [ReactJS](https://facebook.github.io/react/) - Wow!
  * View Library by Facebook
* [Redux](http://redux.js.org/) - Amazing!
  * Forces one way data flow
* [Redux-Saga](https://redux-saga.js.org/) - Whoa!
  * Library that allows testable asynchronous actions and prevents pesky and embarassing async side effects!
* [React-Router](https://github.com/ReactTraining/react-router) - Yowza!
  * Client-side routing for your single page application!
* [Express](https://expressjs.com/) - Tell me more!
  * Minimalistic and unopinionated server framework for Node.js
* [Jest](https://facebook.github.io/jest/) - Omg!
  * "Configuration-free" testing platform - now with Snapshot testing :D
* [Webpack 3](webpack.js.org) - Unbelievable!
  * Bundler and compiler for all your dependencies
* [Emotion](https://github.com/tkh44/emotion) - Incredible!
  * Next generation super fast CSS-In-JS Styling

## But wait! There's more!
* __Hot Module Replacement__ - Never hit reload again! (ok, maybe like, once or twice when s*** hits the fan and things aren't working... but seriously guys... HMR is pretty nice :D)
* __Redux Dev tools enabled__ - Use the fantastic [Redux Dev Tools](https://github.com/gaearon/redux-devtools) right off the bat!
* __Development and Production Scripts__ - Worried about deploying your webapp in production mode? Don't worry about it, we did that for you!
* __In-boilerplate-documentation__ - We put a slew of documentation into the default webapp to show how all the moving parts work for those who know React, but aren't super comfortable with redux and it's middlewares.
* __Built with TDD in mind__ - Like test driven development? We do too!

All of this, kindly bundled together with the wonderful WTFPL license - that's the ["Do What the F*** You Want to Public License](http://www.wtfpl.net/) - That means it's free!

## Principles
* Avoid #JavascriptFatigue at all costs
* Create a fun and easy system + architecture to develop on
* Build modular and testable
* Front-end first
* Minimal Backend setup
* Maximize Front End performance

While there *is* a backend setup, it has been intentionally left barebone and minimal, only including the utmost standard of items like `helmet` `body-parser` and `morgan` - Backend architecture is something that I am not very experienced in, so I left it bare-bones so that your own rockstart backend guy can take it and run with it.

## Installation
Before you start, make sure you've got these things installed:
* Node 6+
* npm 4+
* [Yarn](yarnpkg.com)
* [Yeoman](http://yeoman.io/)

Install this guy globally
```sh
$ npm install -g generator-not-another-react-boilerplate
```
Create a new directory and `cd` into it
```sh
$ mkdir awesome-app && cd awesome-app
```
Activate the generator with `yo`
```sh
$ yo not-another-react-boilerplate
```
Follow the prompts on screen and BAM! Now ya gots a brand new React application! A developer is you!

### The libraries are great, but I don't like the organization...
Go ahead and change it. If you need help organizing this in a manner to your liking, feel free :). The documentation generated will help you see how everything is organized so you can move things around as you see fit.


## Contributions
I built this boilerplate because I make a ton of React applications and in the consistent pursuit of knowledge, I want to know all the things, and make documentation not just easy to understand, but fun as well. Life's too short to write boring docs, so let's start writing fun docs ;)
**Like this repo? Star it, spread the word!**
Find a bug? Open up an issue and I'll take care of it when I have the time :)
