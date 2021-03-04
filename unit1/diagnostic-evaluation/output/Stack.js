"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.storage = [];
        this.push = (value) => {
            this.storage.push(value);
        };
        this.toString = () => {
            return this.storage.join("");
        };
    }
}
exports.default = Stack;
