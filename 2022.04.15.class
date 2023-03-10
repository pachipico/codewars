// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// 내 답안
public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
      int min = 999999;
      for(int i : args) min = Math.min(i, min);
      return min;
    }
}

// 모범 답안
import java.util.stream.IntStream;

public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
        return IntStream.of(args).min().getAsInt();
    }
// IntStream 이 뭔지 몰랐음...