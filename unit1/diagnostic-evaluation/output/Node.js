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
var _value, _next;
Object.defineProperty(exports, "__esModule", { value: true });
// Models a generic node with a value of its generic type and a connected node.
class Node {
    constructor(value) {
        _value.set(this, void 0);
        _next.set(this, void 0);
        // Returns the value of the node.
        this.getValue = () => {
            return __classPrivateFieldGet(this, _value);
        };
        // Sets the value of the node.
        this.setValue = (value) => {
            __classPrivateFieldSet(this, _value, value);
        };
        // Returns the connected node.
        this.getNext = () => {
            return __classPrivateFieldGet(this, _next);
        };
        // Sets the connected node.
        this.setNext = (next) => {
            __classPrivateFieldSet(this, _next, next);
        };
        __classPrivateFieldSet(this, _value, value);
        __classPrivateFieldSet(this, _next, null);
    }
}
exports.default = Node;
_value = new WeakMap(), _next = new WeakMap();
