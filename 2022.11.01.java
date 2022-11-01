// Background:
// You're working in a number zoo, and it seems that one of the numbers has gone missing!

// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

// In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

// Task:
// Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

// Note: huge lists will be tested.

// Examples:
// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class NumberZooPatrol {

  public static int findMissingNumber(int[] numbers) {
    // TODO replace with your code
    int[] arr1 = Arrays.stream(numbers).sorted().toArray();
    int[] arr2 = IntStream
      .range(arr1[0], arr1[arr1.length - 1])
      .filter(
        v ->
          !Arrays.stream(arr1).boxed().collect(Collectors.toList()).contains(v)
      )
      .toArray();

    return arr2.length == 0 ? arr1[arr1.length - 1] : arr2[0];
  }
}
