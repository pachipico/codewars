// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// 내 답안
function encrypt(text, n) {
  if (n < 1 || !text) return text;
  let odd = [];
  let even = [];
  text.split("").map((v, i) => {
    if (i % 2 == 0) even.push(v);
    else odd.push(v);
  });
  return encrypt([...odd, ...even].join(""), n - 1);
}

function decrypt(text, n) {
  if (n < 1 || !text) return text;
  let res = [];
  for (let i = 0; i <= text.length / 2; i++) {
    res.push(text.slice(text.length / 2, text.length)[i]);
    res.push(text.slice(0, text.length / 2).split("")[i]);
  }
  return decrypt(res.join(""), n - 1);
}

// 모범 답안
function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = "";
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}

// while이랑 for문으로 돌리는 것보다 재귀로 풀어낸 내 풀이가 더 맘에 든다.
