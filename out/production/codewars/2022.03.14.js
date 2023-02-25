// Task:
// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:

// [
//   'XOOXO',
//   'XOOXO',
//   'OOOXO',
//   'XXOXO',
//   'OXOOO']
// should return: "Total land perimeter: 24",

// [
//   'XOOO',
//   'XOXO',
//   'XOXO',
//   'OOXX',
//   'OOOO']

// should return: "Total land perimeter: 18"

function landPerimeter(arr) {
  // 기본 4에서 다음 문자열에서 같은 칸에 있으면 면적 -1, 옆에칸에 있으면 -1 하는 식으로 풀면 될듯?
  let perimeter = 0;
  arr.map((row, rowIdx) => {
    row.split("").forEach((each, eachIdx) => {
      if (each == "X") {
        let cnt = 4;
        if (row[eachIdx - 1] == "X") cnt--;
        if (row[eachIdx + 1] == "X") cnt--;
        if (rowIdx != 0) {
          if (arr[rowIdx - 1][eachIdx] == "X") cnt--;
        }
        if (rowIdx != arr.length - 1) {
          if (arr[rowIdx + 1][eachIdx] == "X") cnt--;
        }
        perimeter += cnt;
      }
    });
  });
  return `Total land perimeter: ${perimeter}`;
}

// 모범 답안
function landPerimeter(arr) {
  let count = 0;
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[0].length; x++) {
      if (arr[y][x] === "X") {
        if (y === 0 || arr[y - 1][x] !== "X") count++;
        if (y === arr.length - 1 || arr[y + 1][x] !== "X") count++;
        if (x === 0 || arr[y][x - 1] !== "X") count++;
        if (x === arr[0].length - 1 || arr[y][x + 1] !== "X") count++;
      }
    }
  }
  return "Total land perimeter: " + count;
}

// 코드 정리만 빼면 나름 만족스럽게 푼듯?
