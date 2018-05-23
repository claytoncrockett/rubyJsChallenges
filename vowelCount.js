function countVowels(string){
  stringLower = string.toLowerCase()
  word = stringLower.split("")
  var count = 0
  for(x of word){
    if(
      (x == 'a') ||
      (x == 'e') ||
      (x == 'i') ||
      (x == 'o') ||
      (x == 'u'))
      {
        count ++
    }
  }
  return count
}

console.log(countVowels("hello world"))