// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
// 내 답안
var maxSequence = function (arr) {
  // ...
  let max = 0;
  let res = arr
    .map((v, i) => {
      if (v > 0) return i;
    })
    .filter((v) => v);
  for (let i = -1; i < res.length; i++) {
    for (let j = 0; j < res.length; j++) {
      let r = arr.slice(res[i], res[j] + 1).reduce((acc, v) => acc + v, 0);
      if (r > max) max = r;
    }
  }
  return max;
};

//모범답안
var maxSequence = function (arr) {
  var min = 0,
    ans = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};

// 잘 모르겠다 이해가 잘 되지 않는다...
