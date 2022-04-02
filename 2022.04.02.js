//  robot1 = {
//   "name": "Rocky",
//   "health": 100,
//   "speed": 20,
//   "tactics": ["punch", "punch", "laser", "missile"]
//  }
//  robot2 = {
//    "name": "Missile Bob",
//    "health": 100,
//    "speed": 21,
//    "tactics": ["missile", "missile", "missile", "missile"]
//  }
//  tactics = {
//    "punch": 20,
//    "laser": 30,
//    "missile": 35
//  }

//  fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."
// robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.

// Rules

// A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
// Robots alternate turns attacking. Tactics are used in order.
// A fight is over when a robot has 0 or less health or both robots have run out of tactics.
// A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
// If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
// If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."

// 내 답안

function fight(robot1, robot2, tactics) {
  // Who robot will Rock 'em, Sock 'em?!
  console.log(robot1);
  console.log(robot2);
  console.log(tactics);
  let cnt = robot1.tactics.length > robot2.tactics.length ? robot1.tactics.length : robot2.tactics.length;
  if (robot1.speed > robot2.speed) {
    for (let i = 0; i < cnt; i++) {
      robot2.health -= tactics[robot1.tactics[i]];
      console.log(`${robot1.name}의 ${robot1.tactics[i]}!`);
      console.log(
        `${robot2.name}는 ${tactics[robot1.tactics[i]]}의 데미지를 입어 ${robot2.health}체력이 남았다!`
      );
      if (robot2.health <= 0) {
        console.log(`${robot1.name} 승리`);
        return `${robot1.name} has won the fight.`;
      }
      robot1.health -= tactics[robot2.tactics[i]];
      console.log(`${robot2.name}의 ${robot2.tactics[i]}!`);
      console.log(
        `${robot1.name}는 ${tactics[robot2.tactics[i]]}의 데미지를 입어 ${robot1.health}체력이 남았다!`
      );
      if (robot1.health <= 0) {
        console.log(`${robot2.name} 승리`);
        return `${robot2.name} has won the fight.`;
      }
    }
    if (robot1.health == robot2.health) {
      return `The fight was a draw.`;
    } else if (robot1.health > robot2.health) {
      return `${robot1.name} has won the fight.`;
    } else {
      return `${robot2.name} has won the fight.`;
    }
  }
  if (robot2.speed > robot1.speed) {
    for (let i = 0; i < cnt; i++) {
      robot1.health -= tactics[robot2.tactics[i]];
      console.log(`${robot2.name}의 ${robot2.tactics[i]}!`);
      console.log(
        `${robot1.name}는 ${tactics[robot2.tactics[i]]}의 데미지를 입어 ${robot1.health}체력이 남았다!`
      );
      if (robot1.health <= 0) {
        console.log(`${robot2.name} 승리`);
        return `${robot2.name} has won the fight.`;
      }
      robot2.health -= tactics[robot1.tactics[i]];
      console.log(`${robot1.name}의 ${robot2.tactics[i]}!`);
      console.log(
        `${robot2.name}는 ${tactics[robot1.tactics[i]]}의 데미지를 입어 ${robot2.health}체력이 남았다!`
      );
      if (robot2.health <= 0) {
        console.log(`${robot1.name} 승리`);
        return `${robot1.name} has won the fight.`;
      }
    }
    if (robot1.health == robot2.health) {
      return `The fight was a draw.`;
    } else if (robot1.health > robot2.health) {
      return `${robot1.name} has won the fight.`;
    } else {
      return `${robot2.name} has won the fight.`;
    }
  }
  if (robot1.speed == robot2.speed) {
    for (let i = 0; i < cnt; i++) {
      robot2.health -= tactics[robot1.tactics[i]];
      console.log(`${robot1.name}의 ${robot1.tactics[i]}!`);
      console.log(
        `${robot2.name}는 ${tactics[robot1.tactics[i]]}의 데미지를 입어 ${robot2.health}체력이 남았다!`
      );
      if (robot2.health <= 0) {
        console.log(`${robot1.name} 승리`);
        return `${robot1.name} has won the fight.`;
      }
      robot1.health -= tactics[robot2.tactics[i]];
      console.log(`${robot2.name}의 ${robot2.tactics[i]}!`);
      console.log(
        `${robot1.name}는 ${tactics[robot2.tactics[i]]}의 데미지를 입어 ${robot1.health}체력이 남았다!`
      );
      if (robot1.health <= 0) {
        console.log(`${robot2.name} 승리`);
        return `${robot2.name} has won the fight.`;
      }
    }
    if (robot1.health == robot2.health) {
      return `The fight was a draw.`;
    } else if (robot1.health > robot2.health) {
      return `${robot1.name} has won the fight.`;
    } else {
      return `${robot2.name} has won the fight.`;
    }
  }
}

// 모범 답안

function fight(r1, r2, tactic) {
  if (r1.speed < r2.speed) [r1, r2] = [r2, r1];
  while (r1.tactics.length || r2.tactics.length) {
    if (r1.tactics.length) r2.health -= tactic[r1.tactics.shift()];
    if (r2.health <= 0) break;
    if (r2.tactics.length) r1.health -= tactic[r2.tactics.shift()];
    if (r2.health <= 0) break;
  }
  if (r1.health == r2.health) return "The fight was a draw.";
  return `${r1.health > r2.health ? r1.name : r2.name} has won the fight.`;
}
