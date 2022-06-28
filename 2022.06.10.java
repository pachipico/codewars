// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// 내 답안
public class TwiceAsOld{

  public static int TwiceAsOld(int dadYears, int sonYears){
    return Math.abs(dadYears - 2*sonYears);
  }

}

// 모범답안
public class TwiceAsOld{

  public static int TwiceAsOld(int dadYears, int sonYears){
    return Math.abs((sonYears*2)-dadYears);
  
  }

}