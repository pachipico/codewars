// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// 시간이 없어서 7급 문제를 풀어보았다..
// 내 답안
function findShort(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

// 모범 답안
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}
// 내 풀이가 나는 좀 더 맘에 든다.
