// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

// 내 답안
function expandedForm(num) {
  return String(num)
    .split("")
    .map((v, i) => v + "0".repeat(String(num).length - 1 - i))
    .filter((v) => parseInt(v))
    .join(" + ");
}

// 모범답안
function expandedForm(num) {
  return String(num)
    .split("")
    .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
    .filter((num) => Number(num) != 0)
    .join(" + ");
}

// 완전히 똑같다.
