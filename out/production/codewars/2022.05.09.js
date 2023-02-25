// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message) {
  //your code here
  const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return message
    .split("")
    .map((v) => {
      let upperCase = v.toLowerCase() != v;
      let v_ = v.toLowerCase();
      if (!arr.includes(v_)) return v;
      let res = arr.indexOf(v_) + 13 >= 26 ? arr[(arr.indexOf(v_) + 13) % 26] : arr[arr.indexOf(v_) + 13];
      return upperCase ? res.toUpperCase() : res;
    })
    .join("");
}

// 모범 답안
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}

// 아예 13번째가 미뤄진 배열이나 문자열로 그냥 치환해도 되는거였음..
