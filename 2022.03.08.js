// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//내 답안
function pigIt(str) {
  //Code here
  return str
    .split(" ")
    .map((each) => {
      if (!each.includes("!") && !each.includes("?")) {
        each = each.slice(1, each.length + 1) + each[0] + "ay";
      }
      return each;
    })
    .join(" ");
}

//모범 답안
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + "ay";
  });
}
// 알고리즘 문제에는 regexp 공부가 필요할듯..
