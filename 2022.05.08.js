// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// 첫번째 답안
function high(x) {
  console.log(x);
  const arr = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let res = x.split(" ").map((v) => {
    return v.split("").reduce((acc, v, i) => acc + arr.indexOf(v), 0);
  });
  return x.split(" ")[res.indexOf(Math.max(...res))];
}
// 두번째 답안. 이게 더 맘에 듦.
function high(x) {
  console.log(x);
  const arr = [
    "",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return x
    .split(" ")
    .sort(
      (a, b) =>
        b.split("").reduce((acc, v) => acc + arr.indexOf(v), 0) -
        a.split("").reduce((acc, v) => acc + arr.indexOf(v), 0)
    )[0];
}

// 모범 답안. 아스키 코드값으로 접근하는것도 생각은 했는데 익숙하지가 않아서 배열로 처리했는데 얼추 비슷한 풀이 인듯.
function high(s) {
  let as = s.split(" ").map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
