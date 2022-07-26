// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

// 내 답안
public class Repeater{
  public static String repeat(String string,long n){
    return string.repeat((int) n);
  }
}

// 모범답안
public class Repeater {
  public static String repeat(String string, long n) {
    return string.repeat((int)n);
  }
}