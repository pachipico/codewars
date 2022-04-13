// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// 내 답안
public class Solution {

    public static boolean check(Object[] a, Object x) {
        // Your code here
      
       return Arrays.asList(a).contains(x);
    }

}
//모범 답안
import java.util.Arrays;
public class Solution {

    public static boolean check(Object[] a, Object x) {
        // Your code here
        
       return Arrays.asList(a).contains(x);
    }

}

// Arrays 나 ArrayList를 쓰려면 java.util 에서 임포트를 해야하는걸 배움... 하나하나 해줘야 하는듯..