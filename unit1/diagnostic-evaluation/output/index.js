"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PalindromeChecker_1 = __importDefault(require("./PalindromeChecker"));
const fs_1 = __importDefault(require("fs"));
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// Manages the CLI interface.
inquirer_1.default
    .prompt([
    {
        name: "file",
        type: "input",
        message: "Enter the path of the file you want to read from:",
        default: "testInputFile.txt",
    },
    {
        name: "visual",
        type: "list",
        message: "Do you want to use the graphic implementation?",
        choices: ["Yes", "No"],
    },
])
    .then((answers) => {
    const { file, visual } = answers;
    fs_1.default.readFile(file, (e, d) => {
        if (e) {
            process.stdout.write(`[${chalk_1.default.redBright(Error)}] > Error while reading the given file, check the path.`);
            return;
        }
        const checker = new PalindromeChecker_1.default(d.toString());
        if (visual === "Yes") {
            checker.isPalindromeVisual();
        }
        else {
            process.stdout.write("\x1Bc");
            process.stdout.write(`${chalk_1.default.cyan(d.toString())} is` +
                `${checker.isPalindrome() ? "" : chalk_1.default.redBright(" not")}` +
                ` a palindrome.`);
        }
    });
})
    .catch((error) => {
    console.error(error);
});
