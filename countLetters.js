function countLetters(stringToCount) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var wordToCount = stringToCount.split('')
  var finalCount = []
  var letterCount = 0
  for (var i in alphabet) {
    letterCount = 0
    for (var j in wordToCount) {
      if (wordToCount[j] == alphabet[i]) {
        letterCount++
      }
    }
    if (letterCount > 0) {
      if (letterCount == 1) {
        var stringToAdd = ("There is " + letterCount + " " + alphabet[i] + " in " + stringToCount)
      } else {
        var stringToAdd = ("There are " + letterCount + " " + alphabet[i] + "'s in " + stringToCount)
      }
      finalCount.push(stringToAdd)
    }
  }
  return finalCount
}

console.log(countLetters("hello"))