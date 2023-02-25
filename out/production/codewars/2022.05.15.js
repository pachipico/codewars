// Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

// Use spaces to fill in the gaps between words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Gap between words can't differ by more than one space.
// Lines should end with a word not a space.
// '\n' is not included in the length of a line.
// Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
// Last line should not be justified, use only one space between words.
// Last line should not contain '\n'
// Strings with one word do not need gaps ('somelongword\n').
// Example with width=30:

// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// Vestibulum    sagittis   dolor
// mauris,  at  elementum  ligula
// tempor  eget.  In quis rhoncus
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// suscipit   tristique.   Nam  a
// imperdiet   tellus.  Nulla  eu
// vestibulum    urna.    Vivamus
// tincidunt  suscipit  enim, nec
// ultrices   nisi  volutpat  ac.
// Maecenas   sit   amet  lacinia
// arcu,  non dictum justo. Donec
// sed  quam  vel  risus faucibus
// euismod.  Suspendisse  rhoncus
// rhoncus  felis  at  fermentum.
// Donec lorem magna, ultricies a
// nunc    sit    amet,   blandit
// fringilla  nunc. In vestibulum
// velit    ac    felis   rhoncus
// pellentesque. Mauris at tellus
// enim.  Aliquam eleifend tempus
// dapibus. Pellentesque commodo,
// nisi    sit   amet   hendrerit
// fringilla,   ante  odio  porta
// lacus,   ut   elementum  justo
// nulla et dolor.

// 못 풀었음..
function justify(text, width) {
  // Your code goes here
  //   console.log(text)
  console.log(width);
  let res = [];
  let lines = [];
  let arr = text.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (lines.join("").length + arr[i].length + lines.length - 1 < width) lines.push(arr[i]);
    else {
      res.push(lines);
      lines = [arr[i]];
    }
  }

  res = res.reduce((acc, val, idx) => {
    let spaces = width - val.join("").length;
    let cnt = val.length - 1;
    let eachSpaces = Math.ceil(spaces / cnt);
    // 한 문장에 들어갈 단어들을 처리는 했으나 일정한 간격으로 띄워쓰기를 하는 방법을 못찾음..
    let space = width - ("" + val.length);
    for (var i = 0; i < spaces; i++) {
      val[i % (val.length - 1)] += " ";
    }
    console.log(val);
  }, "");

  return res;
}

// 모범 답안
var justify = function (str, len) {
  var words = str.split(" ");
  var output = [];
  while (words.length) {
    // Collect as many words as possible for the current line
    var lineWords = [];
    while (words.length > 0 && (lineWords + "," + words[0]).length <= len) lineWords.push(words.shift());

    if (words.length) {
      // No last line, so justify it
      // Compute the holes between the words
      var spaces = len - ("" + lineWords).length;
      for (var i = 0; i < spaces; i++) lineWords[i % (lineWords.length - 1)] += " ";
    }

    // Build the line
    output.push(lineWords.join(" "));
  }

  return output.join("\n");
};
