// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.

// 내 풀이(못풀음)

function mixedFraction(s) {
  //your code here
  let nums = s.split("/");
  nums = nums.map((each) => Number(each));
  console.log(nums);
  if (nums[0] == 0) return "0";
  if (nums[1] == 0) {
    class ZeroDivisionError extends Error {
      constructor(message) {
        super(message);
        this.name = "ZeroDivisionError";
      }
    }
    return 0 / 0;
  }
  const gcd = (a, b) => {
    if (b === 0) return a; // 나누어지면 a 리턴
    return gcd(b, a % b); // 나누어지지 않는다면 b와 a%b를 다시 나눈다
  };

  console.log(
    Math.trunc(nums[0] / nums[1]),
    ` ${Math.abs(nums[0] % nums[1]) / gcd(Math.abs(nums[0] % nums[1]), nums[1])}/${
      nums[1] / gcd(Math.abs(nums[0] % nums[1]), nums[1])
    }`
  );
  if (Math.trunc(nums[0] / nums[1]) == 0) {
    return `${Math.abs(nums[0] % nums[1]) / gcd(Math.abs(nums[0] % nums[1]), nums[1])}/${
      nums[1] / gcd(Math.abs(nums[0] % nums[1]), nums[1])
    }`;
  } else if (Math.abs(nums[0] % nums[1]) / gcd(Math.abs(nums[0] % nums[1]), nums[1]) == 0) {
    return `${Math.trunc(nums[0] / nums[1])}`;
  } else {
    return `${Math.trunc(nums[0] / nums[1])} ${
      Math.abs(nums[0] % nums[1]) / gcd(Math.abs(nums[0] % nums[1]), nums[1])
    }/${Math.abs(nums[1] / gcd(Math.abs(nums[0] % nums[1]), nums[1]))}`;
  }
}

// 모범 답안
gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
function mixedFraction(s) {
  var [x, y] = s.split("/").map((z) => +z);
  if (y == 0) throw "ZeroDivisionError";
  if (x % y == 0) return "" + x / y;
  var g = gcd(x, y),
    add = x / y < 0 ? "-" : "";
  (x = Math.abs(x / g)), (y = Math.abs(y / g));
  return add + (x < y ? "" : Math.floor(x / y) + " ") + (x % y) + "/" + y;
}
