// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// 내 답안
import java.util.*;
import java.util.stream.Collectors;
public class ZywOo {
  public static int sumOfDifferences(int[] arr) {
    int res = 0;
        List<Integer> list = Arrays.stream(arr).sorted().mapToObj(Integer::valueOf).collect(Collectors.toList());
        Collections.reverse(list);
        for(int i = 0; i < list.size()-1; i++){
            res += list.get(i) - list.get(i+1);
        }
        return res;
  }
}

// 모범 답안
import java.util.Arrays;

public class ZywOo {
  public static int sumOfDifferences(int[] arr) {
    Arrays.sort(arr);
    return arr.length <= 1 ? 0 : arr[arr.length-1] - arr[0];
  }
}