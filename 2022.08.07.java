// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// public class Fighter {
//   public String name;
//   public int health, damagePerAttack;
//   public Fighter(String name, int health, int damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//   }
// }

//내 답안
public class Kata {
  public static String declareWinner(Fighter fighter1, Fighter fighter2, String firstAttacker) {
        // Your code goes here. Have fun!
        while (fighter1.health > 0 || fighter2.health > 0) {
            if (firstAttacker.equals(fighter1.name)) {
                fighter2.health -= fighter1.damagePerAttack;
                if (fighter2.health <= 0) break;
                fighter1.health -= fighter2.damagePerAttack;
                if (fighter1.health <= 0) break;
            } else {
                fighter1.health -= fighter2.damagePerAttack;
                if (fighter1.health <= 0) break;
                fighter2.health -= fighter1.damagePerAttack;
                if (fighter2.health <= 0) break;
            }
        }
        return fighter1.health > fighter2.health ? fighter1.name : fighter2.name;
  }
}

// 모범답안
public class Kata {
  public static String declareWinner(Fighter fighter1, Fighter fighter2, String firstAttacker) {
    Fighter a=fighter1, b=fighter2;
    if (firstAttacker.equals(fighter2.name)) {
      a = fighter2; b = fighter1;
    }    
    while (true) {      
      if ((b.health -= a.damagePerAttack) <= 0) return a.name;  // a wins
      if ((a.health -= b.damagePerAttack) <= 0) return b.name;  // b wins
    }
  }
}