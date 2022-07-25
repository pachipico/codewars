// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"


// Note: if this seems too simple for you try the next level

// 내 답안
public class ArrayPrinter {

    public static String printArray(Object array[]) {
String res = "";
        for (Object s : array) {
            res += "," + String.valueOf(s);
        }
        return res.substring(1);

    }
}

// 모범답안 
import java.util.Arrays;
import java.util.stream.Collectors;

public class ArrayPrinter {

    public static String printArray(Object[] array) {
      return Arrays.stream(array).map(Object::toString).collect(Collectors.joining(","));
    }
}