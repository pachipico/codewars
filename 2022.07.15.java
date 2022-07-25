// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// 내 답안

public class Kata
{
  public static String greet(String name)
  {
    StringBuilder sb = new StringBuilder();
    return sb.append("Hello, ").append(name).append(" how are you doing today?").toString();
  }
}
 // 모범답안 
    public class Kata
{
  public static String greet(String name)
  {
    return String.format("Hello, %s how are you doing today?", name);
  }
}