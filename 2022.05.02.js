// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// 내 답안 => 포문을 없애고 싶음... nFloors 의 값만큼 반복하면서 리턴해주는 식이 안떠오름...
function towerBuilder(nFloors) {
  // build here
  let arr = [1];
  for (let i = 0; i < nFloors; i++) {
    if (i > 0) arr.push(arr[arr.length - 1] + 2);
  }
  let max = arr[arr.length - 1];
  return arr.map((v) => {
    return " ".repeat((max - v) / 2) + "*".repeat(v) + " ".repeat((max - v) / 2);
  });
}

// 모범 답안. 솔직히 Array.from 함수를 모르겠어서 검색해보았다.
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}
// Array.from함수를 풀어서 하면 이렇게 된다. 인덱스+인덱스 +1 하면 0+0+1 = 1, 1+1+1 = 3, 2+2+1 = 5 이런식으로 1,3,5,7,9 값을 얻을수 있다.
function towerBuilder(n) {
  return Array.from({ length: n }).map((v, i) => {
    const spaces = " ".repeat(n - i - 1);
    return spaces + "*".repeat(i + i + 1) + spaces;
  });
}

// 접근 방향은 좋았는데 지식의 부족인듯 하다.
