// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// 내 답안 => 못풀음; 이 문제의 의도를 이해 못하겠음...
function prefill(n, v) {
  let arr = [];
  console.log("n", n);
  if (n == undefined || n == null) return undefined;
  if (n == 0) return arr;
  if (n == Infinity || !Number.isInteger(Number(n)) || n < 0 || n == true || n == false)
    throw new TypeError(`${n} is invalid`);
  for (let i = 1; i <= n; i++) {
    arr.push(v);
  }
  console.log(arr);
  return arr;
}
// 모범 답안
function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
  return +n ? Array(n).fill(v) : [];
}
