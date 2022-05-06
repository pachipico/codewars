// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

// 내 답안. 너무 지저분하다..
function upArray(arr) {
  // ...
  let length = arr.length;
  if (arr.filter((v) => v >= 0 && v < 10).length != length || length == 0) return null;
  let res = arr
    .reverse()
    .map((v, i, arr) => {
      if (i == 0) v++;
      if (v == 10) {
        v = 0;
        if (i == arr.length - 1) length = 0;
        arr[i + 1] += 1;
      }
      return v;
    })
    .reverse();
  !length && res.unshift(1);
  return res;
}

// 모범 답안. 어쩔수 없는건가.. 지저분하다.
function upArray(arr) {
  if (typeof arr === "undefined" || arr === null || arr.length === 0) {
    return null;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || typeof arr[i] !== "number" || arr[i] > 9) {
      return null;
    }
  }
  for (var j = arr.length - 1; j > -1; j--) {
    if (arr[j] !== 9) {
      arr[j] = arr[j] + 1;
      break;
    } else {
      arr[j] = 0;
    }

    if (j === 0) {
      arr.unshift(1);
    }
  }

  return arr;
}
//다른 답안. 처음에 나도 이렇게 하려고 했는데 수가 너무 커지면서 실패했다. 라이브러리를 사용한거같은데 옳지 않은 풀이인듯 하다.
const BigNumber = require("bignumber.js");

const upArray = (arr) =>
  arr.length === 0 || arr.filter((x) => x < 0 || x > 9).length > 0
    ? null
    : new BigNumber(arr.join("")).plus(1).toPrecision().split("").map(Number);
