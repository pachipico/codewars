// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

// 내 답안 (비효율적인 코드로 매우 높은 숫자는 시간이 너무 오래걸림.)
function removeNb(n) {
  let result = [];
  console.log(n);
  let sum = (n / 2) * n + n / 2;
  //   let arr = []
  //   for(let i = 1; i <= n; i++){
  //     arr.push(i)
  //   }
  //   console.log(sum)
  //   arr.filter((f, i) => {
  //     arr.map(s => {
  //       if(f*s == sum- f-s){
  //         result.push([f,s])
  //         return
  //       }
  //     })
  //   })
  for (let first = 1; first <= n; first++) {
    for (let sec = 1; sec <= n; sec++) {
      if (first * sec == sum - first - sec) {
        result.push([first, sec]);
      }
    }
  }

  return result;
}

//모범 답안
function removeNb(n) {
  // from the instruction:
  // a * b = S(n) - a - b

  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2

  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)

  // but a and b are natural and up to n

  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = ((n * (n + 1)) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}

//수학적으로 접근할수도 있다는걸 배움.
