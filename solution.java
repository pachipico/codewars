import java.rmi.Remote;
import java.util.*;
import java.util.function.IntBinaryOperator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.LongStream;

public class solution {

//  "<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>\n\n"
  public static String catalog(String s, String name) {
    System.out.println(Arrays.stream(s.split("")).filter(v -> name.indexOf(v)>=0).distinct().collect(Collectors.joining()))
    return "";
  }



}
