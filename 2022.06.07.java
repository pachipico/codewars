// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// 내 답안
public class DRoot {
  public static int digital_root(int n) {
    int res = n;
		while(res > 9) {
			res = parse(res);
		}
		return res;
  }
  private static int parse(int n) {
		int res = 0;
		String[] arr = (n+"").split("");
		for(String num : arr) {
			res += Integer.parseInt(num);
		}
		return res;
	}
}
// 모범 답안
public class DRoot {
  public static int digital_root(int n) {
    while(n > 9){
      n = n/10 + n % 10;
      }
    return(n);
  }
}