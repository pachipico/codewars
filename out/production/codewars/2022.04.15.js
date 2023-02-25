// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// 내 답안
function duplicateEncode(word) {
  // ...
  let obj = {};
  word.split("").forEach((v) => {
    if (!obj[v.toLowerCase()]) {
      obj[v.toLowerCase()] = 1;
    } else {
      obj[v.toLowerCase()]++;
    }
  });
  return word
    .split("")
    .map((v) => {
      return obj[v.toLowerCase()] == 1 ? "(" : ")";
    })
    .join("");
}

// 모범 답안
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// lastIndexOf() 를 생각 못했다...어찌보면 당연한건데 생각의 폭을 넓힐 필요가 있을듯...
