// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// 내 답안
public class Dinglemouse {
	public static int[] humanYearsCatYearsDogYears(final int humanYears) {
		int cat = 15;
		int dog = 15;
		if (humanYears > 1) {
			cat += 5;
			dog += 4;
		}
		cat += (humanYears - 1) * 4;
		dog += (humanYears - 1) * 5;
		return new int[] { humanYears, cat, dog };
	}
}

// 모범 답안
public class Dinglemouse {
  public static int[] humanYearsCatYearsDogYears(final int y) {
    return new int[]{y,y==1?15:16+4*y,y==1?15:14+5*y};
  }
}