var shell = require('shelljs');
console.log(shell.ls())
shell.cd('bin')
shell.cat('hubot')
shell.exec('hubot')