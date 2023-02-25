// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"
// 내 답안
function diamond(n) {
  if (n % 2 != 1) return null;
  let diam = "";
  let index = 1;
  for (let i = 1; i <= n * 2; i += 2) {
    if (i <= n) {
      index += 2;
      diam += " ".repeat((n - i) / 2);
      diam += "*".repeat(i);
    }
    if (i == n) index -= 2;
    if (i > n) {
      index -= 2;
      diam += " ".repeat((n - index) / 2);
      diam += "*".repeat(index);
    }
    diam += "\n";
  }
  return diam;
}

// 모범 답안
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = "";
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += " ".repeat(len);
    str += "*".repeat(n - 2 * len);
    str += "\n";
  }
  return str;
}
