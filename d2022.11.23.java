import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

class d {

  public static int[] reverse(int n) {
    //your code
    new StringBuilder(
      IntStream
        .range(0, n + 1)
        .mapToObj(String::valueOf)
        .collect(Collectors.joining())
    )
      .reverse()
      .toString()
      .split("");

    return new int[] {};
  }
}
