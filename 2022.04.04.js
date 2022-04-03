// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//내 답안
function validatePIN(pin) {
  //return true or false
  console.log(pin);
  const four = /^\d{4}$/;
  const six = /^\d{6}$/;

  if (four.test(pin)) {
    return true;
  } else if (six.test(pin)) {
    return true;
  } else {
    return false;
  }
}

//모범답안
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

//진짜 정규식 공부 필요한듯..
