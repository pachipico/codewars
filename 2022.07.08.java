// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// 내 답안
import java.util.Arrays;
import java.util.stream.Collectors;
public class CodeWars {
  public static int strCount(String str, char letter) {
    return Arrays.asList(str.split("")).stream().filter(v -> v.equals(String.valueOf(letter))).collect(Collectors.toList()).size();
  }
}

// 모범 답안
public class CodeWars {
  public static int strCount(String str, char letter) {
    return (int)str.chars().filter(x -> x == letter).count();
  }
}