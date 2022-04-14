// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// 내 답안
function isPangram(string) {
  //...
  let obj = {};
  for (let i = 97; i <= 122; i++) {
    obj[i] = 0;
  }
  string
    .split("")
    .filter((v) => v != " ")
    .filter((v) => v.toLowerCase().charCodeAt() >= 97 && v.toLowerCase().charCodeAt() <= 122)
    .forEach((v) => {
      console.log(v.toLowerCase().charCodeAt());
      if (v.toLowerCase().charCodeAt()) {
        obj[v.toLowerCase().charCodeAt()] = 1;
      } else {
        obj[v.toLowerCase().charCodeAt()]++;
      }
    });
  return Object.values(obj).includes(0) ? false : true;
}

// 모범 답안
function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

// every 함수 처음봄.. 역시 많이 부족한듯
