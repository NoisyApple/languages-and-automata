import { Letter } from "./Letter";
import Stack from "./Stack";

const stack = new Stack<Letter>();

console.log(stack.size());

stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

console.log(stack.size());
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.size());

console.log(stack.pop());
console.log(stack.size());

stack.push("H");
console.log(stack.size());

console.log(stack.toString());
console.log(stack.size());
