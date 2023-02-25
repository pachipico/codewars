// Your task in the kata is to determine how many boats are sunk damaged and untouched from a set amount of attacks. You will need to create a function that takes two arguments, the playing board and the attacks.

// Example Game
// The board

// Boats are placed either horizontally, vertically or diagonally on the board. 0 represents a space not occupied by a boat. Digits 1-3 represent boats which vary in length 1-4 spaces long. There will always be at least 1 boat up to a maximum of 3 in any one game. Boat sizes and board dimentions will vary from game to game.

// Attacks
// Attacks are calculated from the bottom left, first the X coordinate then the Y. There will be at least one attack per game, and the array will not contain duplicates.

// [[2, 1], [1, 3], [4, 2]];
// First attack      `[2, 1]` = `3`
// Second attack `[1, 3]` = `0`
// Third attack     `[4, 2]` = `1`
// Function Initialization
// board = [[0,0,0,2,2,0],
//          [0,3,0,0,0,0],
//          [0,3,0,1,0,0],
//          [0,3,0,1,0,0]];
// attacks = [[2, 1], [1, 3], [4, 2]];
// damagedOrSunk(board, attacks);
// Scoring
// 1 point for every whole boat sank.
// 0.5 points for each boat hit at least once (not including boats that are sunk).
// -1 point for each whole boat that was not hit at least once.
// Sunk or Damaged
// `sunk` = all boats that are sunk
// `damaged` = all boats that have been hit at least once but not sunk
// `notTouched/not_touched` = all boats that have not been hit at least once
// Output
// You should return a hash with the following data

// `sunk`, `damaged`, `notTouched`, `points`
// Example Game Output
// In our above example..

// First attack: `boat 3` was damaged, which increases the `points` by `0.5`
// Second attack: miss nothing happens
// Third attack: `boat 1` was damaged, which increases the `points` by `0.5`
// `boat 2` was untouched so `points -1` and `notTouched +1` in Javascript/Java/C# and `not_touched +1` in Python/Ruby.
// No whole boats sank
// Return Hash
// { sunk: 0, damaged: 2 , notTouched: 1, points: 0 }

// 내 답안
function damagedOrSunk(board, attacks) {
  //the battle starts here!]
  let result = { sunk: 0, damaged: 0, notTouched: 0, points: 0 };
  let boats = {};
  let damage = {};
  board.forEach((v) => {
    v.forEach((v) => {
      if (v == 0) return;
      if (boats[v] == undefined) boats[v] = 1;
      else boats[v] += 1;
    });
  });
  board = board.reverse();
  let damaged = attacks.map((v) => {
    let [x, y] = v;
    x -= 1;
    y -= 1;
    if (damage[board[y][x]] == undefined) damage[board[y][x]] = 1;
    else damage[board[y][x]] += 1;
    return board[y][x];
  });
  for (const [key, val] of Object.entries(boats)) {
    if (damage[key] == undefined) {
      result.notTouched += 1;
      result.points -= 1;
    }
    if (damage[key]) {
      boats[key] -= damage[key];
      result.damaged += 1;
      if (boats[key] == 0) {
        // 가라앉았을때
        result.sunk += 1;
        result.damaged -= 1;
        result.points += 1;
      } else {
        // 가라앉진 않았을때
        result.points += damage[key] * 0.5;
      }
    }
  }
  return result;
}

// 모범 답안
function damagedOrSunk(board, attacks) {
  let ships = {};
  board.map((x, i) =>
    x.map((y, j) => {
      let cell = board[i][j];
      if (cell) {
        ships[cell] = ++ships[cell] || 1;
      }
    })
  );

  let state = Object.assign({}, ships);
  for (let [x, y] of attacks) {
    let cell = board[board.length - y][x - 1];
    if (cell && state[cell]) {
      state[cell] -= 1;
    }
  }

  let sunk = Object.keys(state).filter((x) => state[x] == 0).length;
  let damaged = Object.keys(state).filter((x) => state[x] != ships[x]).length - sunk;
  let notTouched = Object.keys(ships).length - sunk - damaged;

  return { sunk, damaged, notTouched, points: sunk - notTouched + damaged * 0.5 };
}
