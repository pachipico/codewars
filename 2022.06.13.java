// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// 내 답안
import java.util.*;
import java.util.stream.Collectors;

public class TwoToOne {
    
    public static String longest (String s1, String s2) {
      Set<String> set = new HashSet<>(new ArrayList<>(Arrays.asList(String.join("", s1, s2).split(""))));
		  return String.join("", set.stream().sorted().collect(Collectors.toList()));
    }
}

// 모범 답안
public class TwoToOne {
    
    public static String longest (String s1, String s2) {
        String s = s1 + s2;
        return s.chars().distinct().sorted().collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append).toString();
    }
}