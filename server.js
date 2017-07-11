var shell = require('shelljs');

shell.set('-e')
shell.export('PATH="node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"')
shell.exec('node_modules/.bin/hubot --name "slackbatabata" "$@"')