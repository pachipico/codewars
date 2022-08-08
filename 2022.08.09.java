// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


// 내 답안
import java.util.stream.IntStream;
import java.util.stream.Collectors;

class Solution{
    public static String[] capitalize(String s){
        // Gorillaz - Do Ya Thing (2010)
        String[] arr = s.split("");
        return new String[]{
          IntStream.range(0, s.length()).mapToObj(v -> v % 2 == 1 ? arr[v] : arr[v].toUpperCase()).collect(Collectors.joining()), 
          IntStream.range(0, s.length()).mapToObj(v1 -> v1 % 2 != 1 ? arr[v1] : arr[v1].toUpperCase()).collect(Collectors.joining())};
    }
}

// 모범 답안
import java.util.stream.IntStream;

class Solution{
    public static String[] capitalize(String s){
        StringBuilder sb1 = new StringBuilder(s),
                      sb2 = new StringBuilder(s.toUpperCase());
        IntStream.range(0, s.length())
                 .filter(  i -> (i&1)==0 )
                 .forEach( i -> { sb1.setCharAt(i, sb2.charAt(i));
                                  sb2.setCharAt(i, s.charAt(i)); });
        return new String[] {sb1.toString(), sb2.toString()};
    }
}
// 점점 stream이 편해진다.