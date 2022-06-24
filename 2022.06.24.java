// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// 내 답안
public class Kata {

  public static String solution(String str) {
		String res = "";
		for(int i = 1; i <= str.length(); i++) {
			res += str.charAt(str.length()-i);
		}
		return res;
	}

}

// 모범 답안
public class Kata {

  public static String solution(String str) {
    return new StringBuilder(str).reverse().toString();
  }

}