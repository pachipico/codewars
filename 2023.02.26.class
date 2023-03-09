//Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
//

// 내 답안
import java.util.Arrays;
import java.util.stream.Collectors;

class Nerd {
    public static String nerdify(String txt){
        return Arrays.stream(txt.split("")).map(v -> {
            switch (v.toLowerCase()){
                case "a":
                    return "4";
                case "e":
                    return "3";
                default:
                    return v.equals("l") ? "1" : v;
            }
        }).collect(Collectors.joining());
    }
}

// 모범 답안
class Nerd {
    public static String nerdify(String txt){
        return txt.replaceAll("[aA]", "4").replaceAll("[eE]", "3").replaceAll("l", "1");
    }
}

// 이렇게 풀걸..