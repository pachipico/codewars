// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "cㅇㅇㅇㅇㅇㅇamel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// 내 답안
function solution(string) {
  let arr = [];
  let startIndex = 0;
  string.split("").forEach((word, i) => {
    if (word.toLowerCase() !== word) {
      arr.push(string.slice(startIndex, i));
      startIndex = i;
    }
    if (i == string.length - 1) {
      arr.push(string.slice(startIndex, i + 1));
    }
  });
  return arr.join(" ");
}

// 모범 답안
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

// 정규식... 해야겠다..
