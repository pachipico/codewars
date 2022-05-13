// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// 내 답안
public class BitCounting {
	public static int countBits(int n){
    String[] ns = Integer.toBinaryString(n).split("");
    int res = 0;
    for(String s : ns){
      res += Integer.valueOf(s);
    };
    return res;
	}
}

// 모범답안
public class BitCounting {

  public static int countBits(int n){
    
    return Integer.bitCount(n);
  }
  
}
// bitCount라는걸 배웠다 있는지도 몰랐다.