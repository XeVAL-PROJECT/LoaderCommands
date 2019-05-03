const requireAll = require('require-all');

let commands = requireAll({ dirname: `${__dirname}/COMMANDS/` }); // подключает папку COMMANDS

for (const f in commands) bot.commands.set(f, commands[f]);
for (const dir in commands) { // Циклом пепеберает папку COMMANDS
    for (const f in commands[dir]) { // Циклом переберает папки с командами в папке COMMANDS
        bot.commands.set(f, commands[dir][f]); // Загрузка команд
        console.log(`Папка команд ${dir} загружена ${f}`);
    }
}
