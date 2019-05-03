# LoaderCommands

## Install require-all
* ```npm i require-all --save```

## Script
* Его кинуть в index.js

```
const requireAll = require('require-all');

let commands = requireAll({ dirname: `${__dirname}/COMMANDS/` });

for (const f in commands) bot.commands.set(f, commands[f]);
for (const dir in commands) {
    for (const f in commands[dir]) {
        bot.commands.set(f, commands[dir][f]);
        console.log(`Папка команд ${dir} загружена ${f}`);
    }
}
```
