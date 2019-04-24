let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "r", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H"]

function random(len) {
  let str = ""
  for (let i = 0; i < len; i++) {
    let val = arr[Math.floor(Math.random() * arr.length)]
    str += val
  }
  return str
}

export {
  random
}