import PalindromeChecker from "./PalindromeChecker";
import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";

// Manages the CLI interface.
inquirer
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

    fs.readFile(file, (e, d) => {
      if (e) {
        process.stdout.write(
          `[${chalk.redBright(
            Error
          )}] > Error while reading the given file, check the path.`
        );
        return;
      }

      const checker = new PalindromeChecker(d.toString());

      if (visual === "Yes") {
        checker.isPalindromeVisual();
      } else {
        process.stdout.write("\x1Bc");
        process.stdout.write(
          `${chalk.cyan(d.toString())} is` +
            `${checker.isPalindrome() ? "" : chalk.redBright(" not")}` +
            ` a palindrome.`
        );
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
