const requireAll = require('require-all');

// Загружает все комманды из папки "commands".
let commands = requireAll({ dirname: `${__dirname}/commands` });

// Добавляем команды боту.
for (const f in commands) {
  bot.commands.set(f, commands[f]);
}

// Перебираем все модули в директории "commands".
for (const dir in commands) {
  for (const f in commands[dir]) {
    bot.commands.set(f, commands[dir][f]);
    console.log(`Команда ${f} из модуля ${dir} была загружена.`);
  }
}
