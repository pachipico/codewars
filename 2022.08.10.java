// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.



// 내 답안
public class Solution
{
    public static int[] rowWeights (final int[] weights)
    {
        int a = 0;
        int b = 0;
        for (int i = 0; i <= weights.length-1; i++) {
            if (i % 2 == 1){
                a += weights[i];
            } else {
                b += weights[i];
            }
        }
        return new int[] {b,a};
    }
}


// 모범 답안
public class Solution {
  public static int[] rowWeights (final int[] weights) {
    int totals[] = new int[2], idx = 0;
    for (int w : weights) totals[(idx++)%2] += w;
    return totals;
  }
  
}