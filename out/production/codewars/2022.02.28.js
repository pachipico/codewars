// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// 내 답안
function reverseWords(str) {
  // Go for it
  let revStr = [];
  str.split(" ").forEach((word) => {
    let revWord = [];
    word.split("").forEach((letter) => {
      revWord.unshift(letter);
    });
    revStr.push(revWord.join(""));
  });
  return revStr.join(" ");
}

// 모범 답안
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// reverse() 라는 함수를 알게 됨.
