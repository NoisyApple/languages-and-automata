"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _peek, _size;
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
// Models a generic node based stack.
class Stack {
    constructor() {
        _peek.set(this, void 0);
        _size.set(this, void 0);
        // Pushes a new node with the given value at the top of the stack and returns the size.
        this.push = (value) => {
            const newNode = new Node_1.default(value);
            newNode.setNext(__classPrivateFieldGet(this, _peek));
            __classPrivateFieldSet(this, _peek, newNode);
            return __classPrivateFieldSet(this, _size, +__classPrivateFieldGet(this, _size) + 1);
        };
        // Returns the popped node at the peek of the stack.
        this.pop = () => {
            const poppedNode = __classPrivateFieldGet(this, _peek);
            const newPeek = __classPrivateFieldGet(this, _peek).getNext();
            __classPrivateFieldSet(this, _peek, newPeek);
            poppedNode.setNext(null);
            __classPrivateFieldSet(this, _size, +__classPrivateFieldGet(this, _size) - 1);
            return poppedNode.getValue();
        };
        // Returns the size of the stack.
        this.size = () => {
            return __classPrivateFieldGet(this, _size);
        };
        // Gathers the values from each node into a string and then returns it.
        this.toString = () => {
            let data = "";
            let currentNode = __classPrivateFieldGet(this, _peek);
            do {
                data = currentNode.getValue() + data;
                currentNode = currentNode.getNext();
            } while (currentNode != null);
            return data;
        };
        __classPrivateFieldSet(this, _peek, null);
        __classPrivateFieldSet(this, _size, 0);
    }
}
exports.default = Stack;
_peek = new WeakMap(), _size = new WeakMap();
