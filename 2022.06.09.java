// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// 내 답안
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;

public class FindOdd {
	public static int findIt(int[] a) {
  	Map<String, Integer> map = new HashMap<>();
		List<Integer> list = new ArrayList<>();
		for(int n : a) {
			String n_ = String.valueOf(n);
			if(map.get(n_) == null) map.put(n_, 1);
			else map.put(n_, map.get(n_) + 1);
		}
		map.forEach((k,v) -> {
			if(v % 2 != 0) list.add(Integer.parseInt(k));
		});
    return list.get(0);
  }
}
// 모범 답안
public class FindOdd {
  public static int findIt(int[] A) {
    int xor = 0;
    for (int i = 0; i < A.length; i++) {
      xor ^= A[i];
    }
    return xor;
  }
}