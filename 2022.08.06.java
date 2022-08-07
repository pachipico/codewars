// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"


// 내 답안
public class Tortoise {
    public static int[] race(int v1, int v2, int g) {
      double perSec1 = v1 / 60.0 / 60.0;
      double perSec2 = v2 / 60.0 / 60.0;
      double totalSec = g / (perSec2 - perSec1);
      int hour = (int)Math.floor((float)(totalSec/60/60));
      int min = (int)Math.floor(((float)totalSec/60/60 - hour)*60);
      int sec = (int)Math.floor(((((float)totalSec/60/60 - hour)*60)-min)*60);
      return v1 >= v2 ? null : new int[]{hour, min, sec};
    }
}
// 모범답안
public class Tortoise {
    public static int[] race(int v1, int v2, int g) {
      int totalSecondsTaken = 0;
      if (v2 > v1 ) {
        totalSecondsTaken = (g*3600) / (v2-v1) ;
      } else {
        return null;
      }
      return new int[] {totalSecondsTaken/3600, (totalSecondsTaken % 3600)/60, totalSecondsTaken % 60};

    }
}

//2
public class Tortoise {
    public static int[] race(int v1, int v2, int g) {
        if (v1 >= v2) return null;
        int t = 3600 * g / (v2 - v1);
        return new int[] { t / 3600, t % 3600 / 60, t % 60};
    }
}