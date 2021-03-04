import Node from "./Node";

// Models a generic node based stack.
export default class Stack<T> {
  #peek: Node<T>;
  #size: number;

  constructor() {
    this.#peek = null;
    this.#size = 0;
  }

  // Pushes a new node with the given value at the top of the stack and returns the size.
  push = (value: T): number => {
    const newNode = new Node<T>(value);

    newNode.setNext(this.#peek);
    this.#peek = newNode;

    return ++this.#size;
  };

  // Returns the popped node at the peek of the stack.
  pop = (): T => {
    const poppedNode = this.#peek;
    const newPeek = this.#peek.getNext();

    this.#peek = newPeek;
    poppedNode.setNext(null);
    this.#size--;

    return poppedNode.getValue();
  };

  // Returns the size of the stack.
  size = (): number => {
    return this.#size;
  };

  // Gathers the values from each node into a string and then returns it.
  toString = (): string => {
    let data = "";

    let currentNode = this.#peek;

    do {
      data = currentNode.getValue() + data;
      currentNode = currentNode.getNext();
    } while (currentNode != null);

    return data;
  };
}
