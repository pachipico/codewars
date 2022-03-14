// Consider a deck of 52 cards, which are represented by a string containing their suit and face value.

// Your task is to write two functions encode and decode that translate an array of cards to/from an array of integer codes.

// function encode :

// input : array of strings (symbols)

// output : array of integers (codes) sorted in ascending order

// function decode :

// input : array of integers (codes)

// output : array of strings (symbols) sorted by code values

// ['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
// [0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding
// The returned array must be sorted from lowest to highest priority (value or precedence order, see below).

// Card suits:
// name    |  symbol   |  precedence
// ---------------------------------
// club          c            0
// diamond       d            1
// heart         h            2
// spade         s            3

// 52-card deck:
//   c     |     d     |    h     |    s
// ----------------------------------------
//  0: A      13: A      26: A      39: A
//  1: 2      14: 2      27: 2      40: 2
//  2: 3      15: 3      28: 3      41: 3
//  3: 4      16: 4      29: 4      42: 4
//  4: 5      17: 5      30: 5      43: 5
//  5: 6      18: 6      31: 6      44: 6
//  6: 7      19: 7      32: 7      45: 7

// 내 답안
const sym = ["c", "d", "h", "s"];
const num = {
  A: 0,
  T: 9,
  J: 10,
  Q: 11,
  K: 12,
};

function encode(input) {
  return input
    .map((each) => each.split(""))
    .map((each) => {
      if (Number.isInteger(parseInt(each[0]))) return 13 * sym.indexOf(each[1]) + parseInt(each[0]) - 1;
      else return 13 * sym.indexOf(each[1]) + num[each[0]];
    })
    .sort((a, b) => a - b);
}

function decode(input) {
  return input
    .sort((a, b) => a - b)
    .map((each) => {
      let symNum = parseInt(each / 13);
      let cardNum;
      if (each % 13 != 0 && each % 13 <= 9) cardNum = (each % 13) + 1;
      else cardNum = each % 13;
      if (cardNum >= 10) cardNum = Object.entries(num).filter((n) => n[1] == each % 13)[0][0];
      return (cardNum ? cardNum : "A") + sym[symNum];
    });
}
//모범 답안
const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
const suits = ["c", "d", "h", "s"];

function encode(input) {
  return input.map((card) => cards.indexOf(card[0]) + suits.indexOf(card[1]) * 13).sort((a, b) => a - b);
}

function decode(input) {
  return input.sort((a, b) => a - b).map((card) => cards[card % 13] + suits[Math.floor(card / 13)]);
}

// 배열로 다 넣을걸........
