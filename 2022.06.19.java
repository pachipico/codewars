// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) 
// such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:


// 내 답안
import java.util.*;
import java.util.stream.*;

public class StringUtils {
  
  public static String toAlternativeString(String string) {
    return String.join("", Arrays.asList(string.split("")).stream().map(v -> {
			return v == v.toLowerCase() ? v.toUpperCase() : v.toLowerCase();
		}).collect(Collectors.toList()));
		
  }
}

// 모범 답안 
public class StringUtils {
    public static String toAlternativeString(String string) {
        String result = "";
        for (char c : string.toCharArray()) {
            if(Character.isUpperCase(c)) {
                result += Character.toLowerCase(c);
            } else {
                result += Character.toUpperCase(c);
            }
        }
        return result;
    }
}