// Hey You !
// Sort these integers for me ...

// By name ...

// Do it now !

// Input
// Range is 0-999

// There may be duplicates

// The array may be empty

// Example
// Input: 1, 2, 3, 4
// Equivalent names: "one", "two", "three", "four"
// Sorted by name: "four", "one", "three", "two"
// Output: 4, 1, 3, 2
// Notes
// Don't pack words together:
// e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
// e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
// Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
// e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
// e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"

// 내 답안 (못풀음..)
function sortByName(ary) {
  // Your code here
  console.log(ary);
  const toString = (num) => {
    let [oneth, tenth, hundth] = num
      .toString()
      .split("")
      .reverse()
      .map((n, i) => {
        let str = "";
        switch (parseInt(n)) {
          case 1:
            str = "one";
            break;
          case 2:
            str = "two";
            break;
          case 3:
            str = "three";
            break;
          case 4:
            str = "four";
            break;
          case 5:
            str = "five";
            break;
          case 6:
            str = "six";
            break;
          case 7:
            str = "seven";
            break;
          case 8:
            str = "eight";
            break;
          case 9:
            str = "nine";
            break;
          case 0:
            str = "";
            break;
        }
        return str;
      });
    if (hundth) {
      hundth = hundth + " hundred ";
    }
    if (tenth) {
      if (tenth != "one") {
        if (tenth == "two") tenth = "twenty ";
        if (tenth == "three") tenth = "thirty ";
        if (tenth == "four") tenth = "fourty ";
        if (tenth == "five") tenth = "fifty ";
        if (tenth == "six") tenth = "sixty ";
        if (tenth == "seven") tenth = "seventy ";
        if (tenth == "eight") tenth = "eighty ";
        if (tenth == "nine") tenth = "ninety ";
      } else {
        tenth = "";
        if (oneth == "one") oneth = "eleven";
        else if (oneth == "two") oneth = "twelve";
        else if (oneth == "three") oneth = "thirteen";
        else if (oneth == "four") oneth = "fourteen";
        else if (oneth == "five") oneth = "fifteen";
        else if (oneth == "six") oneth = "sixteen";
        else if (oneth == "seven") oneth = "seventeen";
        else if (oneth == "eight") oneth = "eighteen";
        else if (oneth == "nine") oneth = "nineteen";
        else oneth = "ten";
      }
    }
    if (num == 0) return ["zero", 0];
    return [(hundth ? hundth : "") + (tenth ? tenth : "") + oneth, num];
  };
  console.log(
    ary
      .map((each) => toString(each))
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map((each) => each[0])
  );
  return ary
    .map((each) => toString(each))
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((each) => each[1]);
}

// 모범 답안
function sortByName(arr) {
  return arr.sort((a, b) => num2word(a).localeCompare(num2word(b)));
}

function num2word(n) {
  let a = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let b = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if (n >= 0 && n < 20) return a[n];
  if (n >= 20 && n < 100) return b[Math.floor(n / 10) - 2] + (n % 10 ? "-" + a[n % 10] : "");
  if (n >= 100 && n < 1000)
    return a[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + num2word(n % 100) : "");
}
