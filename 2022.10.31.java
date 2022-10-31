import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class NumberZooPatrol {

  public static int findMissingNumber(int[] numbers) {
    // TODO replace with your code
    List<Integer> ls = Arrays
      .stream(numbers)
      .boxed()
      .sorted()
      .collect(Collectors.toList());
    return IntStream
      .range(ls.get(0), ls.get(ls.size() - 1))
      .filter(v -> !ls.contains(v))
      .findFirst()
      .getAsInt();
  }
}
