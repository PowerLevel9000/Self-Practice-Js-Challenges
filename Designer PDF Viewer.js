function designerPdfViewer(h, word) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let heights = [];
    for(let a in word) {
      for(let b in alphabet) {
        if (word[a]===alphabet[b]) {
          heights.push(Number(h[b]))
          break
        }
      }
    }
    return Math.max(...heights)*word.length
}
console.log(designerPdfViewer("1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5".split(" "), "abc"))