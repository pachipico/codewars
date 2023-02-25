// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// sumDigPow(90, 100) == []

// 내 답안
function sumDigPow(a, b) {
  // Your code here
  let arr = [];
  for (let i = a; i <= b; i++) {
    i ==
      parseInt(
        String(i)
          .split("")
          .reduce((p, v, i) => {
            return p + Math.pow(v, i + 1);
          }, 0)
      ) && arr.push(i);
  }
  return arr;
}

// 모범 답안
function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j + 1);
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}

// 비슷한 풀이이지만 reduce를 사용했다. reduce를 실제로 써보는건 처음인데 조금더 알아볼 필요가 있을듯. 만족하는 풀이가 나왔다.
