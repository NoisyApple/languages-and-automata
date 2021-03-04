import { Letter } from "./Letter";
import Stack from "./Stack";

export default class PalindromeChecker {
  #phrase: string;
  #leftStack: Stack<Letter>;
  #rightStack: Stack<Letter>;

  constructor(phrase: string) {
    this.#phrase = phrase;
    this.#leftStack = new Stack<Letter>();
    this.#rightStack = new Stack<Letter>();
  }

  isPalindrome = (): boolean => {
    const trimmedPhrase = this.#phrase.replace(/\s+/g, "");

    for (let i = 0; i < trimmedPhrase.length; i++)
      this.#leftStack.push(trimmedPhrase[i] as Letter);
    for (let i = trimmedPhrase.length - 1; i >= 0; i--)
      this.#rightStack.push(trimmedPhrase[i] as Letter);

    let index = trimmedPhrase.length - 1;

    while (index >= 0) {
      const leftValue = this.#leftStack.pop();
      const rightValue = this.#rightStack.pop();

      if (leftValue.toLowerCase() != rightValue.toLowerCase()) return false;

      index--;
    }

    return true;
  };
}
