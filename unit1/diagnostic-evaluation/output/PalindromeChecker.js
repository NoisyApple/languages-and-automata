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
var _phrase, _leftStack, _rightStack;
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = require("./Stack");
class PalindromeChecker {
    constructor(phrase) {
        _phrase.set(this, void 0);
        _leftStack.set(this, void 0);
        _rightStack.set(this, void 0);
        this.check = () => {
            const trimmedPhrase = __classPrivateFieldGet(this, _phrase).replace(/\s+/g, "");
            for (let i = 0; i < trimmedPhrase.length; i++)
                __classPrivateFieldGet(this, _leftStack).push(trimmedPhrase[i]);
            for (let i = trimmedPhrase.length - 1; i >= 0; i--)
                __classPrivateFieldGet(this, _rightStack).push(trimmedPhrase[i]);
            let index = trimmedPhrase.length - 1;
            while (index >= 0) {
                const leftValue = __classPrivateFieldGet(this, _leftStack).pop();
                const rightValue = __classPrivateFieldGet(this, _rightStack).pop();
                if (leftValue.toLowerCase() != rightValue.toLowerCase())
                    return false;
                index--;
            }
            return true;
        };
        __classPrivateFieldSet(this, _phrase, phrase);
        __classPrivateFieldSet(this, _leftStack, new Stack_1.default());
        __classPrivateFieldSet(this, _rightStack, new Stack_1.default());
    }
}
exports.default = PalindromeChecker;
_phrase = new WeakMap(), _leftStack = new WeakMap(), _rightStack = new WeakMap();
