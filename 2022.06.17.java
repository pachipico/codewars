// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// 내 답안
import java.util.*;

public class Kata {
  public static String reverseLetter(final String str) {
      List<String> res = new ArrayList<>();

      for(char c : str.toCharArray()) {
        int idx = (int) c;
        if((idx >= 65 && idx <= 90) || (idx >= 97 && idx <= 122)) res.add(String.valueOf(c));
      }
       Collections.reverse(res);
          return String.join("", res);
      }
}
// 모범답안
public class Kata {
    public static String reverseLetter(final String s) {
        return new StringBuilder(s.replaceAll("[^a-zA-Z]", "")).reverse().toString();
    }
}