// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// 내 답안
function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .split("")
    .map((v) => alphabet.includes(v.toLowerCase()) && alphabet.indexOf(v.toLowerCase()) + 1)
    .filter((v) => v)
    .join(" ");
}

// 모범 답안
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

// 반복문이 두개라 모범답안이 훨씬 좋은 답안인듯.. 그래도 점점 속도나 풀이가 나아지고 있는것같음. 늘 느끼지만 정규식... 해야겠다..
