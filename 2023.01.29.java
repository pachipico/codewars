import java.util.Arrays;
import java.util.stream.Collectors;

class d {
      public static int repeats(int [] arr){
        //..
        
        String st = Arrays.stream(arr).sorted().boxed().map(String::valueOf).collect(Collectors.joining());
        return Arrays.stream(st.split("(?<=(.))(?!\\1)")).filter(v -> v.length() == 1).mapToInt(Integer::parseInt).sum();
    }


}
