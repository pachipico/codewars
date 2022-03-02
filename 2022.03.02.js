// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// 내 답안
function validatePIN(pin) {
  //return true or false
  let cnt = pin.split("").filter((each) => Number.isInteger(parseInt(each)) == true);
  console.log(cnt);
  return pin.length == 4 || pin.length == 6 ? cnt.length == 4 || cnt.length == 6 : false;
}

// -1.234 는 true가 맞는데 답에선 false 라고 함. 문제가 이상한것 같음.
