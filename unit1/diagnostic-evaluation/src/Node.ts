// Models a generic node with a value of its generic type and a connected node.
export default class Node<T> {
  #value: T;
  #next: Node<T>;

  constructor(value: T) {
    this.#value = value;
    this.#next = null;
  }

  // Returns the value of the node.
  getValue = (): T => {
    return this.#value;
  };

  // Sets the value of the node.
  setValue = (value: T): void => {
    this.#value = value;
  };

  // Returns the connected node.
  getNext = (): Node<T> => {
    return this.#next;
  };

  // Sets the connected node.
  setNext = (next: Node<T>): void => {
    this.#next = next;
  };
}
