// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)
// 내 답안
function twoSum(numbers, target) {
  res = [];
  numbers.forEach((n, i1) => {
    numbers.forEach((m, i2) => {
      if (i1 != i2 && n + m == target) {
        res = [i1, i2];
        return;
      }
    });
  });
  return res.sort();
}

// 모범 답안
function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
// 같은 풀이같아 보이지만 내 답안이 좀더 지저분하다. 원초적인 for문을 썼으면 좀더 좋았을듯 했다.
