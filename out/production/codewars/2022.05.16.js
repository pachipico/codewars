// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

// Examples:
// removNb(26) should return [(15, 21), (21, 15)]
// or
// removNb(26) should return { {15, 21}, {21, 15} }
// or
// removeNb(26) should return [[15, 21], [21, 15]]
// or
// removNb(26) should return [ {15, 21}, {21, 15} ]
// or
// removNb(26) should return "15 21, 21 15"

// 내 답안

function removeNb(n) {
  let arr = [];
  for (let m = 0; m < n; m++) {
    arr.push(m + 1);
  }
  let sum = arr.reduce((acc, v, i) => acc + v, 0);
  let result = [];
  let res = arr.filter((v) => {
    let num = (sum - v) / (v + 1);
    if (Number.isInteger(num) && num < n) {
      result.push([v, num]);
    }
  });
  return result;
}

// 모범 답안
function removeNb(n) {
  var sum = (n * (n + 1)) / 2;
  var result = [];
  for (var a = 1; a < n; a++) {
    if ((sum - a) % (a + 1) === 0) {
      var b = (sum - a) / (a + 1);
      if (b < n) result.push([a, b]);
    }
  }
  return result;
}

// 같은 풀이/
