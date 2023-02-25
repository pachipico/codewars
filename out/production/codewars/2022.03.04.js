// Implement a function that receives two IPv4 addresses, and returns the number of addresses
// between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// examples
// ipsBetween("10.0.0.0", "10.0.0.50")  ===   50
// ipsBetween("10.0.0.0", "10.0.1.0")   ===  256
// ipsBetween("20.0.0.10", "20.0.1.0")  ===  246

//내 답안
function ipsBetween(start, end) {
  //TODO
  const stArr = start.split(".");
  const endArr = end.split(".");
  let res = 0;
  endArr.forEach((val, idx) => {
    res += (val - stArr[idx]) * 256 ** (3 - idx);
  });
  return res;
}

// 모범 답안

function ipsBetween(start, end) {
  const num = (ip) =>
    ip
      .split(".")
      .map((x) => parseInt(x))
      .reduce((acc, e) => acc * 256 + e);

  return num(end) - num(start);
}

// reduce에 대해 조금더 공부해봐야할것 같음. 시도는 해봤으나 forEach로 바꿔서 풀었음.
