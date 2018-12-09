const {exec,which} = require("shelljs");
const chalk = require("chalk");
console.log(chalk.green('111'));
exec("echo 111");
const res = which("node");
console.log(res);