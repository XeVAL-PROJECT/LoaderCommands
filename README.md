# LoaderCommands

## Установка"
* ```npm install require-all --save```

Затем, нужно добавить библиотеку `require-all` в загрузку.
* ```const requireAll = require('require-all');```

Далее - создаем поле `commands` боту, делается это просто:
* ```bot.commands = {};```

Отлично, теперь нужно добавить содержимое `app.js` после добавления.

После этого все будет выглядить примерно так:

```js
const requireAll = require('require-all');
const discord = require('discord.js');
const bot = new discord.Client();
bot.commands = {};

// Загружает все комманды из папки "commands".
let commands = requireAll({ dirname: `${__dirname}/commands` });

// Ну и дальше там остальной код.
// Ваш в том числе.
```
