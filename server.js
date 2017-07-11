var shell = require('shelljs');
console.log(shell.ls())
shell.cat('./bin/hubot')
shell.exec('bash ./bin/hubot')