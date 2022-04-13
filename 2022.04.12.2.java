// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//내 답안
public class Solution {
    public static String repeatStr(final int repeat, final String string) {
      String str = "";
      for(int i = 0; i < repeat; i++){
        str = str.concat(string);
        };
        return str;
    }
}
// 모범 답안
public class Solution {
    public static String repeatStr(final int repeat, final String string) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < repeat; i++) {
            sb.append(string);
        }

        return sb.toString();
    }
}

// StringBuilder 는 처음본다...