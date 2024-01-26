import inquirer from "inquirer";
import chalk from "chalk";
const questions = [{
        name: "operate",
        type: "list",
        message: "Operation",
        choices: ["+", "*", "/", "-", "^",]
    }, {
        name: "num1",
        type: "number",
        message: "Enter number1",
    }, {
        name: "num2",
        type: "number",
        message: "Enter number2?"
    }, {
        name: "operate",
        type: "list",
        message: "Operation",
        choices: ["+", "*", "/", "-", "^",]
    }
];
// first of all create async function, then call inquirer.prompt to take input 
// from user, then give choices in first object instead of third one
// async function name(params:type) {
// }
async function Operation(questions) {
}
var reply = inquirer.prompt(questions);
reply.then((reply) => {
    switch (reply.operate) {
        case "+":
            console.log(chalk.red.bgWhite(`${reply.num1} + ${reply.num2} = ${reply.num1 + reply.num2}`));
            break;
        case "*":
            console.log(chalk.blue.bgYellow(`${reply.num1} * ${reply.num2} = ${reply.num1 * reply.num2}`));
            break;
        case "-":
            console.log(chalk.black.bgGreen(`${reply.num1} - ${reply.num2} = ${reply.num1 - reply.num2}`));
            break;
        case "/":
            console.log(chalk.yellow.bgGray(`${reply.num1} / ${reply.num2} = ${reply.num1 / reply.num2}`));
            break;
        case "^":
            console.log(chalk.cyanBright.bgRedBright(`${reply.num1} ^ 2 = ${reply.num1 * reply.num2}`));
            break;
        default:
            break;
    }
    // console.log("replies", reply);
});
reply.catch((error) => {
    console.log("Error", error);
});
