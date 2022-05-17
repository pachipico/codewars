// Task
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
// Note
// Make sure not to modify the input of your function in-place, it is a bad practice.
// 내 답안
let getGCD = (num1, num2) => {
  let gcd = 1;
  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};
function mixedFraction(s) {
  //your code here
  let nums = s.split("/");
  if (nums[1] == 0) throw new Error("ZeroDivisionError");
  if (nums[0] == 0) return "0";
  let isMin = false;
  nums = nums.map((v) => {
    if (v.indexOf("-") != -1) {
      isMin = isMin ? false : true;
    }
    return v.replace(/-/, "");
  });
  let a = Math.trunc(nums[0] / nums[1]);
  let gcd = getGCD(nums[0], nums[1]);
  if (a != 0) nums[0] = nums[0] - nums[1] * a;
  let res = a != 0 ? a : "";
  res += nums[0] != "0" && nums[1] != "0" ? ` ${nums[0] / gcd}/${nums[1] / gcd}` : "";
  return isMin ? "-" + res.trim() : res.trim();
}

// 모범 답안
function mixedFraction(s) {
  //input s will be a simple fraction i.e. "4/3", "-10/7", "-22/7"
  var fraction = s.split("/").map((val) => Number(val)),
    numerator = fraction[0],
    denominator = fraction[1],
    integer = 0;

  //anything divided by 0 produces an error
  if (denominator === 0) {
    throw new Error("Division by zero");
  }

  //0 divided by anything is 0
  if (numerator === 0) {
    return "0";
  }

  /* calculate gcf and divide numerator and denominator by
     it to reduce improper fraction as much as possible */
  var gcf = greatestCommonFactor(numerator, denominator);
  numerator /= gcf;
  denominator /= gcf;

  /* calculate the integer and numerator for
     mixed fraction; round integer down */
  integer += ~~(numerator / denominator);
  numerator %= denominator;

  //if output is a mixed number
  if (integer) {
    //checks to see if fraction will be negative
    if (numerator < 0 || denominator < 0) {
      //integer needs proper sign
      integer *= integer < 0 ? 1 : -1;
    }
    return numerator !== 0
      ? //integer is signed already - make numerator and denominator positive
        `${integer} ${Math.abs(numerator)}/${Math.abs(denominator)}`
      : `${integer}`;
  }

  //if output is a simple fraction
  else {
    if (denominator < 0) {
      //make sure numerator is negative
      numerator *= numerator < 0 ? 1 : -1;
    }
    return `${numerator}/${Math.abs(denominator)}`;
  }
}

/* calculates gcf utilizing Euclid's algorithm
   https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm */
function greatestCommonFactor(a, b) {
  return b === 0 ? a : greatestCommonFactor(b, a % b);
}

// 코드가 너무 더럽다고 생각한다... 연습잘하자..
