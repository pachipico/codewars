// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

//내 답안
function validBraces(braces) {
  const braceObj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const openBrace = Object.values(braceObj);
  let checkArr = [];
  let arr = braces.split("");
  for (let i in arr) {
    if (openBrace.includes(arr[i])) {
      checkArr.push(arr[i]);
    } else {
      if (checkArr.includes(braceObj[arr[i]])) {
        checkArr.pop(braceObj[arr[i]]);
      } else return false;
    }
  }
  return checkArr.length ? false : true;
}

//모범 답안
function validBraces(braces) {
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
