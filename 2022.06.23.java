// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore
// 내 답안
public class SecureTester{
  public static boolean alphanumeric(String s){
        return s.length() != 0 ? s.replaceAll("[a-zA-Z0-9]", "").length() > 0 ? false : true : false;
      }
}

// 모범 답안
public class SecureTester {
  public static boolean alphanumeric(String s) {
    return s.matches("[A-Za-z0-9]+");
  }
}    
