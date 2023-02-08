const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  a: "654",
};

function decode(expr) {
  //   console.log(expr);
  let arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }
  let arrM = [];
  for (let j = 0; j < arr.length; j++) {
    let temp = [];
    for (let i = 0; i < arr[j].length; i += 2) {
      if (arr[j][i] + arr[j][i + 1] !== "00") {
        if (arr[j][i] === "*") {
          temp.push(" ");
          break;
        } else if (arr[j][i] + arr[j][i + 1] === "10") {
          temp.push(".");
        } else {
          temp.push("-");
        }
      }
    }
    arrM.push(temp);
  }
  //   console.log(arrM);
  let str = "";
  for (let i = 0; i < arrM.length; i++) {
    // console.log(arrM[i].join(""));
    let strM = arrM[i].join("");

    if (strM === " ") {
      str += " ";
    }

    // console.log(arrM[i]);

    // console.log(MORSE_TABLE[strM]);
    else {
      str += MORSE_TABLE[strM];
    }
  }
  //   console.log(str);
  return str;
}

module.exports = {
  decode,
};

console.log(
  decode(
    "0000101110000011111100101110100010111010000000101000000011100000111110**********00001010100011101110000011111100101111100000000010**********000010101000111011100010101010000011111100001111110010111010"
  )
);
