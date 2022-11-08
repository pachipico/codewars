import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Validate {

    public static int points(String[] games) {
      //implement me
      int[] res = new int[]{2};
      int[][] arr = Arrays.stream(games).map(v -> Arrays.stream(v.split(":")).map(Integer::parseInt).toArray()).toArray(int[][]::new);
      int[] res_ = Arrays.stream(arr).reduce(res,(a,b) -> {
        res[0] += (a[0] + b[0]);
        res[1] += (a[1] + b[1]);
        return res;
      });
      return res_[0] == 
    }
}
