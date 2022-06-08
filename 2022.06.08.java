// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// Kata.encryptThis("Hello") => "72olle"
// Kata.encryptThis("good") => "103doo"
// Kata.encryptThis("hello world") => "104olle 119drlo"
// 내 답안
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.nio.charset.StandardCharsets;

public class Kata {
     public static String encryptThis(String text) {
       if(text == "") return "";
    String[] arr = text.split(" ");
    List<String> res = new ArrayList<>();
    for (String str : arr) {
      List<String> chars = Arrays.asList(str.split(""));
      chars.set(0, String.valueOf(chars.get(0).getBytes(StandardCharsets.US_ASCII)[0]));
      if(chars.size() > 1){
        String sec = chars.get(1);
        chars.set(1, chars.get(chars.size()-1));
        chars.set(chars.size() - 1 , sec);
      }
      res.add(String.join("", chars));
    }
    
    return String.join(" ", res);
  }

}
// 모범답안
public class Kata {

  public static String encryptThis(String text) {
    StringBuilder enc = new StringBuilder();
    for (String word : text.split(" ")) {
      StringBuilder sb = new StringBuilder(word);
      int lastIdx = sb.length() - 1;      
      if (lastIdx > 0) {
        char lastCh = sb.charAt(lastIdx);
        sb.setCharAt(lastIdx, sb.charAt(1));
        sb.setCharAt(1, lastCh);
      }
      enc.append(lastIdx < 0 ? "" : (byte)sb.charAt(0) + sb.substring(1)).append(" ");
    }
    return enc.toString().replaceFirst("\\s++$", ""); // trim tail only
  }
  
}
