// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color.
// Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// "#FF9933" --> {r: 255, g: 153, b: 51}

//내 답안
function hexStringToRGB(hexString) {
  let rhex = hexString.slice(1, 3);
  let ghex = hexString.slice(3, 5);
  let bhex = hexString.slice(5, 7);
  function unHex(hex) {
    let arr = hex.split("").map((each, i) => {
      let result = each;
      if (isNaN(Number(each))) {
        switch (each.toLowerCase()) {
          case "a":
            result = 10;
            break;
          case "b":
            result = 11;
            break;
          case "c":
            result = 12;
            break;
          case "d":
            result = 13;
            break;
          case "e":
            result = 14;
            break;
          case "f":
            result = 15;
            break;
          default:
            break;
        }
      }
      return parseInt(result);
    });
    return arr[0] * 16 + arr[1];
  }
  return { r: unHex(rhex), g: unHex(ghex), b: unHex(bhex) };
}

// 모범 답안
function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1, 3), 16),
    g: parseInt(h.slice(3, 5), 16),
    b: parseInt(h.slice(5, 7), 16),
  };
}

// parseInt에 저런 기능이 있는줄 전혀 몰랐었다...
