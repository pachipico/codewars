Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)


// 내 답안
public class FindDivisor {

  public long numberOfDivisors(int n) {
    // TODO please write your code below this comment
    long cnt = 1;
		for(int i = 1; i <= n/2; i++){
			if(n%i == 0) cnt++;
		}
		return cnt;

  }

}

// 모범답안
import java.util.stream.IntStream;
public class FindDivisor {
  public long numberOfDivisors(int n) {
    return IntStream.range(1, n+1).filter(i -> n%i==0).count();
  }
}