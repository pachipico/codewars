// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// 내 답안
function firstNonRepeatingLetter(s) {
  // Add your code here
  if (s.length == 0) return s;
  let obj = {};
  s.split("")
    .filter((each) => each != " ")
    .map((each) => {
      if (Object.keys(obj).includes(each.toLowerCase())) {
        obj[each.toLowerCase()][0]++;
      } else {
        obj[each.toLowerCase()] = [1, each];
      }
    });
  return Object.entries(obj).filter((each) => each[1][0] == 1).length == 0
    ? ""
    : Object.entries(obj).filter((each) => each[1][0] == 1)[0][1][1];
}

// 모범 답안
function firstNonRepeatingLetter(s) {
  var t = s.toLowerCase();
  for (var x = 0; x < t.length; x++) if (t.indexOf(t[x]) === t.lastIndexOf(t[x])) return s[x];
  return "";
}
// 단순하게 indexOf 랑 lastIndexOf 가 같은 문자를 리턴한다는 생각은 안했던것 같음..
