// Write a function, persistence, that takes in a positive parameter num and returns
// its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// 내 답안
function persistence(num) {
  //code me
  let cnt = 0;
  function step(n) {
    if (n >= 10) {
      cnt++;
      return step(
        n
          .toString()
          .split("")
          .reduce((acc, curr, idx) => {
            return acc * curr;
          })
      );
    } else return cnt;
  }
  return step(num);
}

// 모범 답안
function persistence(num, cnt = 0) {
  let arrayNum = num.toString().split("");
  return arrayNum.length === 1
    ? cnt
    : persistence(
        arrayNum.reduce((x, y) => x * y),
        ++cnt
      );
}

// 비슷하게 풀었음.
