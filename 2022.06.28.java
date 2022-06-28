// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// 내 답안
import java.util.*;
import java.util.stream.*;
public class TimeFormatter {
	private static final int MIN = 60;
	private static final int HOUR = MIN * 60;
	private static final int DAY = HOUR * 24;
	private static final int YEAR = DAY * 365;

	public static String formatDuration(int seconds) {
		
		int year = ((int) Math.floor(seconds / YEAR));
		int day = ((int) Math.floor(seconds / DAY));
		int hour = ((int) Math.floor(seconds / HOUR));
		int min = ((int) Math.floor(seconds / MIN));
		int sec = ((int) Math.floor(seconds));
		sec -= min * 60;
		min -= hour * 60;
		hour -= day * 24;
		day -= year * 365;
		System.out.printf("year: %d,day: %d, hour: %d, min: %d, sec: %d ", year, day, hour, min, sec);
		int[] nums = {year, day, hour, min, sec};
		String[] strs = {" year", " day", " hour", " minute", " second"};
		String res = String.join("",IntStream.range(0, nums.length).mapToObj(i -> {
			String str = "";
			if(nums[i] == 0) return str;
			if(nums[i] != 0) str += nums[i] + strs[i];
			if(nums[i] > 1) str += "s";
			return ", " + str;
		}).filter(v -> v != "").collect(Collectors.toList()));
		
		StringBuilder sb = new StringBuilder(res.replaceFirst(", ", ""));
		
		sb = new StringBuilder(sb.reverse().toString().replaceFirst(",","dna " ));
		return sb.toString().isBlank() ? "now" : sb.reverse().toString();
	}
}

// 모범 답안
	
public class TimeFormatter {
    
    public static String formatDuration(int seconds) {
        String res = "";
        int[] units = new int[] {31536000, 86400, 3600, 60, 1};
        String[] labels = new String[] {"year", "day", "hour", "minute", "second"};
        
        if (seconds == 0) return "now";
        
        for (int i = 0; i < 5; i++) {
          if (seconds >= units[i]) {
            int q = seconds / units[i];
            seconds = seconds % units[i];
            res += (res.equals("") ? "" : (seconds == 0 ? " and " : ", "))
                   + q + " " + labels[i] + (q > 1 ? "s" : "");              
          }
        }
        return res;
    }
}