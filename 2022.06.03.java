// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
// 내 답안
public class Kata {
  public static String rps(String p1, String p2) {
    System.out.println(p1 + p2);
    String res = "";
    switch(p1){
      case "rock":
      if(p2=="rock") res =  "Draw!";
      if(p2=="scissors") res =  "Player 1 won!";
      if(p2=="paper") res =  "Player 2 won!";
      break;
      case "scissors": 
      if(p2=="rock") res =  "Player 2 won!";
      if(p2=="scissors") res =  "Draw!";
      if(p2=="paper") res =  "Player 1 won!";
      break;
      case "paper": 
      if(p2=="rock") res =  "Player 1 won!";
      if(p2=="scissors") res =  "Player 2 won!";
      if(p2=="paper") res =  "Draw!";
      break;
    };
    return res;
  }
}

// 모범 답안
public class Kata {
  public static String rps(String p1, String p2) {
    if(p1 == p2) return "Draw!";
    int p = (p1 + p2).equals("scissorspaper") || (p1 + p2).equals("rockscissors") || (p1 + p2).equals("paperrock") ? 1 : 2;
    return "Player " + p + " won!";
  }
}