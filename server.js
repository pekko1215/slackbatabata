var shell = require('shelljs');
shell.cd('bin')
console.log(shell.ls())
console.log(shell.cat('./hubot'))
shell.exec('./hubot')