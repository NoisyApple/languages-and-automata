"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _phrase, _leftStack, _rightStack, _flushAndPrint, _timeout;
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = __importDefault(require("./Stack"));
const chalk_1 = __importDefault(require("chalk"));
// Evaluates if a given string is a palindrome or not by using two stacks.
class PalindromeChecker {
    constructor(phrase) {
        _phrase.set(this, void 0);
        _leftStack.set(this, void 0);
        _rightStack.set(this, void 0);
        // Returns if the given string is a palindrome or not.
        this.isPalindrome = () => {
            const trimmedPhrase = __classPrivateFieldGet(this, _phrase).replace(/\s+/g, "");
            for (let i = 0; i < trimmedPhrase.length; i++)
                __classPrivateFieldGet(this, _leftStack).push(trimmedPhrase[i]);
            for (let i = trimmedPhrase.length - 1; i >= 0; i--)
                __classPrivateFieldGet(this, _rightStack).push(trimmedPhrase[i]);
            while (__classPrivateFieldGet(this, _leftStack).size() > 0) {
                const leftValue = __classPrivateFieldGet(this, _leftStack).pop();
                const rightValue = __classPrivateFieldGet(this, _rightStack).pop();
                if (leftValue.toLowerCase() !== rightValue.toLowerCase())
                    return false;
            }
            return true;
        };
        // Returns if the given string is a palindrome or not (CLI visual implementation).
        this.isPalindromeVisual = () => __awaiter(this, void 0, void 0, function* () {
            const trimmedPhrase = __classPrivateFieldGet(this, _phrase).replace(/\s+/g, "");
            let leftStackEvaluatedValues = "";
            let rightStackEvaluatedValues = "";
            let isPalindrome = true;
            for (let i = 0; i < trimmedPhrase.length; i++)
                __classPrivateFieldGet(this, _leftStack).push(trimmedPhrase[i]);
            for (let i = trimmedPhrase.length - 1; i >= 0; i--)
                __classPrivateFieldGet(this, _rightStack).push(trimmedPhrase[i]);
            while (__classPrivateFieldGet(this, _leftStack).size() > 0) {
                const leftValue = __classPrivateFieldGet(this, _leftStack).pop();
                const rightValue = __classPrivateFieldGet(this, _rightStack).pop();
                isPalindrome = leftValue.toLowerCase() === rightValue.toLowerCase();
                const color = isPalindrome ? chalk_1.default.bgGreenBright : chalk_1.default.bgRedBright;
                __classPrivateFieldGet(this, _flushAndPrint).call(this, `ORIGINAL STRING => '${chalk_1.default.cyan(__classPrivateFieldGet(this, _phrase))}'\n\n` +
                    `[${chalk_1.default.yellowBright("L Stack")}] > ${chalk_1.default.gray(__classPrivateFieldGet(this, _leftStack).toString())}${color(leftValue)}${chalk_1.default.greenBright(leftStackEvaluatedValues)}` +
                    "\n" +
                    `[${chalk_1.default.yellowBright("R Stack")}] > ${chalk_1.default.gray(__classPrivateFieldGet(this, _rightStack).toString())}${color(rightValue)}${chalk_1.default.greenBright(rightStackEvaluatedValues)}` +
                    "\n\n");
                leftStackEvaluatedValues = leftValue + leftStackEvaluatedValues;
                rightStackEvaluatedValues = rightValue + rightStackEvaluatedValues;
                yield __classPrivateFieldGet(this, _timeout).call(this, 500);
                if (!isPalindrome)
                    break;
            }
            process.stdout.write(`[${chalk_1.default.yellowBright("RESULT")}] > It is${isPalindrome ? "" : chalk_1.default.redBright(" not")} a palindrome`);
        });
        // [UTIL] Clears the terminal and writes the given string.
        _flushAndPrint.set(this, (value) => {
            process.stdout.write("\x1Bc");
            process.stdout.write(value);
        });
        // [UTIL] Generates a timeout of the given time in milliseconds.
        _timeout.set(this, (ms) => {
            return new Promise((resolve) => setTimeout(resolve, ms));
        });
        __classPrivateFieldSet(this, _phrase, phrase);
        __classPrivateFieldSet(this, _leftStack, new Stack_1.default());
        __classPrivateFieldSet(this, _rightStack, new Stack_1.default());
    }
}
exports.default = PalindromeChecker;
_phrase = new WeakMap(), _leftStack = new WeakMap(), _rightStack = new WeakMap(), _flushAndPrint = new WeakMap(), _timeout = new WeakMap();
