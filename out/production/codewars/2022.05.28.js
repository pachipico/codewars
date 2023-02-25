// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
// 내 답안
function sumPairs(ints, s) {
  let temp = Array.from(ints);
  let min = temp.sort((a, b) => a - b)[0];
  let max = temp[temp.length - 1];
  let res = [];
  for (let i = min; i <= max; i++) {
    let pair = s - i;
    let idx = ints.indexOf(i);
    let restArr = ints.slice(idx + 1);
    let pairIdx = restArr.indexOf(pair) + idx;
    if (ints.includes(i) && restArr.includes(pair)) {
      res.push([Math.abs(idx - pairIdx), i, pair]);
    }
  }
  res = res.sort((a, b) => a[0] - b[0])[0];
  return res ? res.slice(1) : undefined;
}

// 모범 답안
function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}
