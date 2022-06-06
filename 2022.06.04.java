// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
// 내 답안
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class Sid {
    public static String howMuchILoveYou(int nb_petals) {
    List<String> list = new ArrayList<>(Arrays.asList(new String[]{"I love you", "a little", "a lot", "passionately", "madly", "not at all"}));
    return list.get((nb_petals-1)%6);
    }
}

// 모범 답안
public class Sid {
    public static String howMuchILoveYou(int nb_petals) {
    
      String[] arr ={"not at all", "I love you",  "a little", "a lot", "passionately", "madly"};
    
      return arr[nb_petals%6];
    }
}
// 자바도 arr[idx]가 되는구나.. List 만 써서 몰랐다.