// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org
// 내 답안. 문제 보자마자 정규식을 써보고싶어 이렇게 풀어봤다.
function solution(list) {
  return list
    .map((v, i) => {
      let linked = 0;
      if (list[i - 1] == v - 1) linked = 1;
      if (list[i + 1] != v + 1) linked = 0;
      return linked ? "*" : v;
    })
    .map((v, i, res) => (v != "*" && res[i + 1] != "*" ? v + "," : v))
    .join("")
    .replace(/[*]+/g, "-")
    .slice(0, -1);
}

// 모범 답안. 굉장히 똑똑한 풀이인거같다.
solution = (list) =>
  list.reduce((acc, curr, i) => {
    if (i == 0) return curr.toString(); // 첫번째 수는 문자열로 치환해 추가 => 문자열고 reduce되는지 몰랐었다.
    if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc; // 연결되는 숫자의 중간이면 아무것도 안하고 그대로 넘어감.마지막 숫자는 아니라는 검증도 됨.
    if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1) return acc + "-" + curr; // 전 단계에서 걸러진 세개 이상 연속되는 수일경우 마지막 숫자이므로 - 붙힘.
    return acc + "," + curr; // 아닐경우 , 추가.
  });
