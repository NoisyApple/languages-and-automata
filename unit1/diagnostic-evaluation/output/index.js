"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = require("./Stack");
const stack = new Stack_1.default();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
console.log(stack.toString());
