import chalk from 'chalk';
import clc from "cli-color";
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;

var msg = clc.xterm(202).bgXterm(236);

console.log(msg("Orange text on dark gray bg"));

console.log(clc.green("Mensagem verde;"));
console.log(clc.red("Mensagem red;"));
console.log(clc.blue("Mensagem blue;"));
console.log(clc.yellow("Mensagem yellow;"));
console.log(clc.red("red" + clc.blue("blue") + "red"));
console.log(clc.red("red") + "plain" + clc.blue("blue"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background."));
console.log(clc.red("Text in red"));
console.log(error("Error!"));
console.log(warn("Warning"));
console.log(notice("Notice"));

process.stdout.write(
    clc.columns([
        [clc.bold("Primeiro nome"), clc.bold("Sobrenome"), clc.bold("Idade")],
        ["Andrei", "Gomes", 37],
        ["Caio", "Silva", 17],
        ["Aline", "Kakaroto", 42]
    ])
)

console.log(chalk.red('oi'));
console.log(chalk.blue("azul")+" e "+chalk.red("vermelho"));
console.log(chalk.red("vermelho "+chalk.blue("azul")+" vermelho ")+ "normal")