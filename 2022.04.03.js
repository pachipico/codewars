// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// 내 답안
function incrementString(strng) {
  // return incrementedString
  let num = [];
  let numStr = "";
  let str = strng.split("").map((n, i) => {
    if (Number.isInteger(parseInt(n))) {
      num.push(n);
    } else {
      return n;
    }
  });
  num = num.join("");
  if (num.length == 0) return str.join("") + "1";

  numStr = String(parseInt(num) + 1);
  if (num[num.length - 1] != 9) {
    while (numStr.length != num.length) {
      numStr = "0" + numStr;
    }
  } else {
    if (num.length > numStr.length) {
      while (numStr.length != num.length) {
        numStr = "0" + numStr;
      }
    }
  }
  return str.join("") + numStr;
}

// 모범답안
const incrementString = (strng) => strng.replace(/[0-8]?9*$/, (val) => ++val);

//정규식 공부가 필요할듯.
