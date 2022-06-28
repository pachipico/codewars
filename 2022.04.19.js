// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// 내 답안

function sortArray(array) {
  // Return a sorted array.
  let idx = [];
  let odds = [];
  array.forEach((v, i) => {
    if (v % 2 == 1 || v % 2 == -1) {
      idx.push(i);
      odds.push(v);
    }
  });
  odds = odds.sort((a, b) => a - b);
  idx.forEach((v, i) => {
    array[v] = odds[i];
  });
  return array;
}
// 모범 답안

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}

// 아예 인덱스 접근을 하지 않고도 가능한걸 생각 못했다...
