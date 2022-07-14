// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// 내 답안
package com.codewars.hwtdstrngls;

public class RoundToTheNextMultipleOf5 {

  public static int roundToNext5(int number) {
    return (int)Math.ceil((double)number/5)*5;
  }
}

// 모범 답안
package com.codewars.hwtdstrngls;

public class RoundToTheNextMultipleOf5 {

  public static int roundToNext5(int number) {
    return (int) (Math.ceil((float) number / 5) * 5);
  }
}