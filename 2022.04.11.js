// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

//8 개씩 나눠서
//인덱스가 8로 나누어 떨어지면 해당 인덱스까지를 잘라내기?

// 내 답안
function dataReverse(data) {
  // Your code here
  let index = 0;
  let arr = [];
  data.forEach((v, i) => {
    if ((i + 1) % 8 == 0) {
      arr.unshift(...data.slice(index, i + 1));
      index = i + 1;
    }
  });
  return arr;
}

// 모범 답안
const dataReverse = (data) => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};

// 포문을 저렇게 쓴다는건 생각도 못했다..
