import { AlphNum } from "./AlphNum";
import Stack from "./Stack";
import chalk from "chalk";

// Evaluates if a given string is a palindrome or not by using two stacks.
export default class PalindromeChecker {
  #phrase: string;
  #leftStack: Stack<AlphNum>;
  #rightStack: Stack<AlphNum>;

  constructor(phrase: string) {
    this.#phrase = phrase;
    this.#leftStack = new Stack<AlphNum>();
    this.#rightStack = new Stack<AlphNum>();
  }

  // Returns if the given string is a palindrome or not.
  isPalindrome = (): boolean => {
    const trimmedPhrase = this.#phrase.replace(/\s|,|\.|'/g, "");

    for (let i = 0; i < trimmedPhrase.length; i++)
      this.#leftStack.push(trimmedPhrase[i] as AlphNum);
    for (let i = trimmedPhrase.length - 1; i >= 0; i--)
      this.#rightStack.push(trimmedPhrase[i] as AlphNum);

    while (this.#leftStack.size() > 0) {
      const leftValue = this.#leftStack.pop();
      const rightValue = this.#rightStack.pop();

      if (leftValue.toLowerCase() !== rightValue.toLowerCase()) return false;
    }

    return true;
  };

  // Returns if the given string is a palindrome or not (CLI visual implementation).
  isPalindromeVisual = async (): Promise<void> => {
    const trimmedPhrase = this.#phrase.replace(/\s|,|\.|'/g, "");
    let leftStackEvaluatedValues = "";
    let rightStackEvaluatedValues = "";
    let isPalindrome = true;

    for (let i = 0; i < trimmedPhrase.length; i++)
      this.#leftStack.push(trimmedPhrase[i] as AlphNum);
    for (let i = trimmedPhrase.length - 1; i >= 0; i--)
      this.#rightStack.push(trimmedPhrase[i] as AlphNum);

    while (this.#leftStack.size() > 0) {
      const leftValue = this.#leftStack.pop();
      const rightValue = this.#rightStack.pop();

      isPalindrome = leftValue.toLowerCase() === rightValue.toLowerCase();

      const color = isPalindrome ? chalk.bgGreenBright : chalk.bgRedBright;

      this.#flushAndPrint(
        `ORIGINAL STRING => ${chalk.cyan(this.#phrase)}\n\n` +
          `[${chalk.yellowBright("L Stack")}] > ${chalk.gray(
            this.#leftStack.toString()
          )}${color(leftValue)}${chalk.greenBright(leftStackEvaluatedValues)}` +
          "\n" +
          `[${chalk.yellowBright("R Stack")}] > ${chalk.gray(
            this.#rightStack.toString()
          )}${color(rightValue)}${chalk.greenBright(
            rightStackEvaluatedValues
          )}` +
          "\n\n"
      );

      leftStackEvaluatedValues = leftValue + leftStackEvaluatedValues;
      rightStackEvaluatedValues = rightValue + rightStackEvaluatedValues;

      await this.#timeout(500);

      if (!isPalindrome) break;
    }

    process.stdout.write(
      `[${chalk.yellowBright("RESULT")}] > It is${
        isPalindrome ? "" : chalk.redBright(" not")
      } a palindrome.`
    );
  };

  // [UTIL] Clears the terminal and writes the given string.
  #flushAndPrint = (value: string): void => {
    process.stdout.write("\x1Bc");
    process.stdout.write(value);
  };

  // [UTIL] Generates a timeout of the given time in milliseconds.
  #timeout = (ms: number): Promise<number> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
}
