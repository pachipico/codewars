// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
//  hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 
// Task:
// Write these two functions
// and

// high-order function oper(fct, s) where

// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
// Note:
// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

// 내 답안
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

class Opstrings {
    
    public static String vertMirror (String strng) {
        String res = Arrays.asList(strng.split("\n")).stream().map(v -> {
            StringBuilder sb = new StringBuilder(v);
            return sb.reverse().toString();
        }).collect(Collectors.joining("\n"));
        return res;
    }
    public static String horMirror (String strng) {
        List<String> list = Arrays.asList(strng.split("\n"));
        Collections.reverse(list);
        return list.stream().collect(Collectors.joining("\n"));
    }
    public static String oper(Function<String ,String > operator, String s) {
        return operator.apply(s);
    }
}

// 모범답안
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

class Opstrings {
    
     public static String vertMirror(String string) {
        return Arrays.stream(string.split("\n"))
                .map(s -> new StringBuilder(s).reverse().toString())
                .collect(Collectors.joining("\n"));
    }

    public static String horMirror(String string) {
        List<String> list = Arrays.asList(string.split("\n"));
        Collections.reverse(list);
        return list.stream().collect(Collectors.joining("\n"));
    }

    public static String oper(Function<String, String> operator, String s) {
        return operator.apply(s);
    }
}