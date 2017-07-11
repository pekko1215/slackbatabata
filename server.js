var shell = require('shelljs');
shell.cd('bin')
console.log(shell.ls())
shell.cat('hubot')
shell.exec('hubot')