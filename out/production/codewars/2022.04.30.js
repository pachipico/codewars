// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

// 내 답안
function hexStringToRGB(hexString) {
  let arr = [];
  for (let i = 2; i < hexString.length; i += 2) {
    arr.push(parseInt("" + hexString[i - 1] + hexString[i], 16));
  }
  return { r: arr[0], g: arr[1], b: arr[2] };
}

// 모범 답안
function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1, 3), 16),
    g: parseInt(h.slice(3, 5), 16),
    b: parseInt(h.slice(5, 7), 16),
  };
}

// 그냥 단순하게 slice써서 하기보다 뭔가 방법이 있을줄 알았다..
// 단순한게 짱임.
