// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//시간이 없어서 8급을 풀었다.
function positiveSum(arr) {
  return arr.reduce((acc, v, i) => {
    if (v > 0) return acc + v;
    else return acc;
  }, 0);
}
// 모범 답안
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// 0을 리턴하는 방법도 있었다.

// 다시 푼 풀이.
function positiveSum(arr) {
  return arr.reduce((acc, v) => acc + (v > 0 ? v : 0), 0);
}

// 똑같다. 8급은 너무 쉬운것같다.
