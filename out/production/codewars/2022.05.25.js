// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]

// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// Task:
// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// Example:
// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]
// n: 4

// The function should return: "PauL"
// Notes:
// The weight array is at least as long as the number of names, it may be longer.

// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".

// See Examples Test Cases for more examples.
// 내 답안
function rank(st, we, n) {
  // your code
  if (st == "") return "No participants";
  let arr = st.split(",");
  if (n > arr.length) return "Not enough participants";

  let winArr = arr.map(
    (v, i) =>
      (v
        .toLowerCase()
        .split("")
        .reduce((acc, v, i) => acc + v.charCodeAt() - 96, 0) +
        v.length) *
      we[i]
  );

  let temp = Array.from(winArr);
  console.log(arr);
  console.log("arr: ", winArr);
  console.log(
    "sorted : ",
    temp.sort((a, b) => b - a)
  );
  console.log("n:", n);
  let winners = [];
  winArr.forEach((v, i) => {
    if (v == temp[n - 1]) {
      console.log(arr[i]);
      winners.push(arr[i]);
    }
  });
  console.log(winners.sort((a, b) => a.localeCompare(b)));
  console.log("\n\n");
  return winners[0];
}

// 모범 답안
function rank(names, weights, rank) {
  if (!names.length) return "No participants";
  var a = names
    .split(",")
    .map((name, i) => [
      name,
      weights[i] * [...name.toUpperCase()].reduce((t, c) => t + c.charCodeAt() - 64, name.length),
    ])
    .sort((p1, p2) => p2[1] - p1[1] || p1[0] > p2[0]);
  return rank > a.length ? "Not enough participants" : a[rank - 1][0];
}
