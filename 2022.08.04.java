// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// 내 답안
import java.util.Arrays;

class MaxDiffLength {
    public static int mxdiflg(String[] a1, String[] a2) {
        if(a1.length == 0 || a2.length == 0) return -1;
        int xMax = Arrays.stream(a1).mapToInt(String::length).max().getAsInt();
        int xMin = Arrays.stream(a1).mapToInt(String::length).min().getAsInt();
        int yMax = Arrays.stream(a2).mapToInt(String::length).max().getAsInt();
        int yMin = Arrays.stream(a2).mapToInt(String::length).min().getAsInt();
        return Math.abs(xMin-yMax) > xMax - yMin ? Math.abs(xMin-yMax) : xMax-yMin;
    }
}

// 모범 답안
import java.util.Arrays;
class MaxDiffLength {
  public static int mxdiflg(String[] a1, String[] a2) {
    if(a1.length == 0 || a2.length == 0) return -1;
    return Math.max(Arrays.stream(a1).mapToInt(s -> s.length()).max().getAsInt() - Arrays.stream(a2).mapToInt(s -> s.length()).min().getAsInt(),
                    Arrays.stream(a2).mapToInt(s -> s.length()).max().getAsInt() - Arrays.stream(a1).mapToInt(s -> s.length()).min().getAsInt());
  }
}

// 같은 풀이임.