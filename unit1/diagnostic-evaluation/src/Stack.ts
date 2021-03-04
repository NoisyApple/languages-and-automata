export default class Stack<T> {
  storage: Array<T> = [];

  push = (value: T): void => {
    this.storage.push(value);
  };

  toString = (): String => {
    return this.storage.join("");
  };
}
