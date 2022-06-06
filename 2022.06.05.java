// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Deadfish.parse("iiisdoso") =- new int[] {8, 64};
	
// 내 답안
import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;

public class DeadFish {
  
	public static int[] parse(String data) {
		List<Integer> list = new ArrayList<>();
		int num = 0;
    for(char v : data.toCharArray()){
      switch (v) {
			case 'i':
				num += 1;
				break;
			case 'd': 
				num -= 1;
				break;
			case 's': 
				num *= num;
				break;
			case 'o':
				list.add(num);
				break;
			default:
				break;
    };
    
		}
		return list.stream().mapToInt(i -> i.intValue()).toArray();
	}
}
// 모범 답안
import java.util.ArrayList;
import java.util.List;

public class DeadFish {
  public static int[] parse(String data) {
    int value = 0;
    List<Integer> result = new ArrayList<>();
    for(char letter : data.toCharArray()) {
      switch(letter) {
        case 'i': value++; break;
        case 'd': value--; break;
        case 's': value *= value; break;
        case 'o': result.add(value); break;
        default: throw new IllegalArgumentException("Not valid code letter");
      }
    }
    return result.stream().mapToInt(Integer::intValue).toArray();
  }
}