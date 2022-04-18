// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// 내 답안
//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr
    .map((v) => {
      if ((v[v.length - 1] == ")" || v[v.length - 1] == "D") && (v[0] == ";" || v[0] == ":")) {
        if (v.length == 3 && (v[1] == "-" || v[1] == "~")) {
          console.log("smiley", v);
          return true;
        }
        if (v.length == 2) {
          console.log("smiley", v);
          return true;
        }
      }
    })
    .filter((v) => v).length;
}

// 모범 답안

function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}
