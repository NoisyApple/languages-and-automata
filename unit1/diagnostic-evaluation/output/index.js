"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PalindromeChecker_1 = __importDefault(require("./PalindromeChecker"));
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile("testInputFile.txt", (e, d) => {
    if (e) {
        console.error(e);
        return;
    }
    const checker = new PalindromeChecker_1.default(d.toString());
    checker.isPalindromeVisual();
});
