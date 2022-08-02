// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// 내 답안
import java.util.Arrays;

public class Kata
{
  public static boolean smallEnough(int[] a, int limit)
  {
    return Arrays.stream(a).max().getAsInt() <= limit;
  }
}

// 모범 답안
public class Kata
{
  public static boolean smallEnough(int[] a, int limit) {
    return java.util.Arrays.stream(a).noneMatch(i -> i>limit);
  }
}

// noneMatch, allMatch 알고있었는데 까비