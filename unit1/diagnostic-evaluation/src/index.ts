import PalindromeChecker from "./PalindromeChecker";
import fs from "fs";

fs.readFile("testInputFile.txt", (e, d) => {
  if (e) {
    console.error(e);
    return;
  }

  const checker = new PalindromeChecker(d.toString());
  checker.isPalindromeVisual();
});
