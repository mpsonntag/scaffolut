[![Build Status](https://travis-ci.org/mpsonntag/scaffolut.svg?branch=master)](https://travis-ci.org/mpsonntag/scaffolut)
[![Build status](https://ci.appveyor.com/api/projects/status/cin0cbpdr39joeh6?svg=true)](https://ci.appveyor.com/project/mpsonntag/scaffolut)
[![Coverage Status](https://coveralls.io/repos/github/mpsonntag/scaffolut/badge.svg?branch=master)](https://coveralls.io/github/mpsonntag/scaffolut?branch=master)
[![Dependencies status](https://david-dm.org/mpsonntag/scaffolut/status.svg)](https://david-dm.org/mpsonntag/scaffolut/status.svg)
[![DevDependencies status](https://david-dm.org/mpsonntag/scaffolut/dev-status.svg)](https://david-dm.org/mpsonntag/scaffolut/dev-status.svg)

scuffolut
=========

This is a testing ground for setting up an es2016/vue project with custom eslint rules and unit testing via 
Karma, Mocha, Chai, Istanbul, Travis CI, Appveyor and Coveralls.

When setting up a CI JavaScript project, hopefully the linklist below gives the Questing One
some pointers into the right direction.

- Note: with the current setup individual builds on Travis with `os: linux` randomly fail with the message 
"Some of your tests did a full page reload!", but run fine if the exact same build is restarted on Travis...
So far it seems, that only builds for Chrome and Opera are affected. Seems to be a `Karma` problem 
as far as [this issue](https://github.com/karma-runner/karma/issues/1101) describes it.
Therefore the `.travis.yml` contains allowed fails for `os: linux` builds that test Opera and Chrome.

### Resources

#### Unit testing
- [Karma](https://karma-runner.github.io)
- [Karma Tutorial](http://www.bradoncode.com/blog/2015/02/27/karma-tutorial/)
- [Mochajs](http://mochajs.org/)
- [Chaijs](http://chaijs.com/)


#### Coverage
- [Javascript karma code coverage configuration for browserify and jasmine](
https://divhide.com/2015/06/29/javascript-code-coverage-configuration-for-browserify-jasmine-and-karma/)
- [How to set up Mocha + Chai + Sinon + Karma + Browserify +Istanbul + Codecov](
https://jaredtong.com/2016/01/08/how-to-set-up-mocha-chai-sinon-karma-browserify-istanbul-codecov/)


#### Travis CI setup
- [Testing JavaScript with Jasmine, Travis, and Karma](https://www.sitepoint.com/testing-javascript-jasmine-travis-karma/)
- [How to Run Karma Tests in a Docker Container](https://dzone.com/articles/how-to-run-karma-tests-in-a-docker-container)
- [Dealing with Karma and Travis timeouts](https://docs.travis-ci.com/user/gui-and-headless-browsers/#Karma-and-Firefox-inactivity-timeouts)
- [Building Better npm Modules with Travis and Coveralls](https://strongloop.com/strongblog/npm-modules-travis-coveralls/)


#### Appveyor CI setup
- [Appveyor - Testing with Node.js](https://www.appveyor.com/docs/lang/nodejs-iojs/)
- [JavaScript Testing with Latest Firefox and Chrome on AppVeyor](https://dzone.com/articles/javascript-testing-with-latest-firefox-and-chrome)


#### Example projects

Example projects that were very helpful figuring our the specific details of various config files.
- [tongrhj/karma-test](https://github.com/tongrhj/karma-test)
- [yesley gist: ES6 + Babel + Browserify + Mocha + Chai + Karma + Istanbul + PhantomJS](https://gist.github.com/yesley/130962ae57ee5bc0f680)
- [Linux and OSX travis builds](https://github.com/Microsoft/vscode-mssql)
- [Linux and OSX travix matrix builds](https://github.com/sash-ua/genetic-drift-a4-ngrx-last)
