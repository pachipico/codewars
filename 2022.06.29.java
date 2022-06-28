// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
// 내 답안 
public class Cockroach{
  public int cockroachSpeed(double x){
    return (int)(x * 100 * 1000/60/60);
  }
}

// 모범 답안
public class Cockroach{
  public int cockroachSpeed(double kph){
    int secondsInHour = 3600;
    int cmInKm = 100000;
    int centimetresPerSecond = (int) (kph * cmInKm / secondsInHour);
    return centimetresPerSecond;
  }
}