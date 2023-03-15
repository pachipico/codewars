//Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!
//
//        In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).
//
//        'X' --> busy
//        'O' --> empty
//        If all rooms are busy, return "None available!"

// 내 답안
import java.util.stream.IntStream;

public class TheOffice {
    public static Object meeting(char[] x) {
        int[] arr = IntStream.rangeClosed(0, x.length-1).filter(idx -> x[idx] == 'O').toArray();
        return arr.length == 0 ? "None available!" : arr[0];

    }
}

// 모범 답안
public class TheOffice {

    public static Object meeting(char[] x) {
        int i = new String(x).indexOf('O');
        return i < 0 ? "None available!" : i;
    }

}
//;; 이걸?