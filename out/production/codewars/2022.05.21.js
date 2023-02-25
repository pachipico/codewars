// In mathematics, a Diophantine equation is a polynomial equation, usually with two or more unknowns, such that only the integer solutions are sought or studied.

// In this kata we want to find all integers x, y (x >= 0, y >= 0) solutions of a diophantine equation of the form:

// x2 - 4 * y2 = n
// (where the unknowns are x and y, and n is a given positive number) in decreasing order of the positive xi.

// If there is no solution return [] or "[]" or "". (See "RUN SAMPLE TESTS" for examples of returns).

// Examples:
// solEquaStr(90005) --> "[[45003, 22501], [9003, 4499], [981, 467], [309, 37]]"
// solEquaStr(90002) --> "[]"
// Hint:
// x2 - 4 * y2 = (x - 2*y) * (x + 2*y)
// 내 답안. 시간이 초과되서 고치다가 결국 못고쳤다.
function solequa(n) {
  console.log(n);
  let arr = [];
  const ds = [[1, n]];

  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      let y = (i - n / i) / 4;
      let x = (i + n / i) / 2;
      if (x >= 0 && y >= 0 && Number.isInteger(x) && Number.isInteger(y)) arr.push([x, y]);
    }
  }
  console.log(arr);
  return arr.sort((a, b) => b[0] - a[0]);
}
// 모범 답안. 나와 비슷한 풀이인데 약수를 구하는 부분에서 효율적으로 구했다.
function solequa(n) {
  if (n % 4 > 1) {
    return [];
  }

  // x^2 - 4y^2 = n
  // (x - 2y)(x + 2y) = n;
  // x - 2y = d1
  // x + 2y = d2
  // 2x = d1 + d2
  // x = (d1 + d2) / 2
  // -4y = d1 - d2
  // y = (d2 - d1) / 4

  let x,
    y,
    maxY = n / 4,
    advY = 1;

  const solutions = findDividers(n).map(([d1, d2]) => {
    x = (d1 + d2) / 2;
    y = (d2 - d1) / 4;
    if (Number.isInteger(x) && Number.isInteger(y)) {
      return [x, y];
    }
  });

  return solutions.sort((s1, s2) => s2[0] - s1[0]).filter((s) => !!s);
}

function findDividers(n) {
  const ds = [[1, n]];
  const sqrtn = Math.sqrt(n);
  for (var i = 2; i <= sqrtn; i++) {
    if (n % i === 0) {
      ds.push([i, n / i]);
    }
  }
  return ds;
}
