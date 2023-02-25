// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// n won't go beyond 1100000.

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).

// In such a case (no pair of prime numbers with a gap of `g`)
// In C: return [0, 0]
// In C++, Lua, COBOL: return `{0, 0}`.
// In F#: return `[||]`.
// In Kotlin, Dart and Prolog: return `[]`.
// In Pascal: return Type TGap (0, 0).
// 내 답안
function gap(g, m, n) {
  // your code
  console.log(g, m, n);
  let arr = Array.from({ length: n - m + 2 }).map((v, i) => m + i + 1);
  let res = [];
  let temp = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (temp + g != i) {
        temp = i;
      } else {
        res.push(temp, i);
        break;
      }
    }
  }
  return res.length == 0 ? null : res;
}

function isPrime(n) {
  const sqrtn = Math.sqrt(n);
  let isPrime = true;
  for (var i = 2; i <= sqrtn; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

// 모범 답안

function gap(g, m, n) {
  var lastPrime = 0;
  var isPrime = function (x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };

  for (var i = m; i <= n; i++)
    if (isPrime(i)) {
      if (i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }

  return null;
}

// 풀이 방식은 비슷 하나 모범 코드가 조금더 정제가 잘 되어 있다. 더 연습하자.

// 이 답안이 더 좋은듯
function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  var m = Math.sqrt(n);
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
}

function gap(g, m, n) {
  let mx = 0;
  for (m, n; m < n; m++) {
    if (isPrime(m)) {
      if (m - mx === g) return [mx, m];
      mx = m;
    }
  }
  return null;
}
