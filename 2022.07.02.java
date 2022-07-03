// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
// 내 답안
import java.util.Arrays;

class TriangleTester{
  public static boolean isTriangle(int a, int b, int c) {
		int[] arr = new int[] {a,b,c};
		Arrays.sort(arr);
		return arr[2] < arr[0] + arr[1];
	}
}

// 모범 답안 
class TriangleTester{
  public static boolean isTriangle(int a, int b, int c){
    return a + b > c && a + c > b && c + b > a;
  }
}