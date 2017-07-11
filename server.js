var shell = require('shelljs');

shell.exec('set -e')
shell.exec('export PATH="node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"')
shell.exec('exec node_modules/.bin/hubot --name "slackbatabata" "$@"')