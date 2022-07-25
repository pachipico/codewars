// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// 내 답안
class Kata {
  public static String countingSheep(int num) {
    String str = "";
        for (int i = 1; i <= num; i ++){
            str += i+" sheep...";
        }
        return str;
  }
}

// 모범 답안
class Kata {
    public static String countingSheep(int num) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 1; i <= num; i++) {
            stringBuilder.append(i).append(" sheep...");
        }
        return stringBuilder.toString();
    }
}