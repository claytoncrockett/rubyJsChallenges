function capitalizeEachWord(word){
  wordsArr = word.split(" ")
  for (var i = 0; i < wordsArr.length; i++){
    wordsArr[i]=capitalizeWord(wordsArr[i])
  }
  capitalizedString = wordsArr.join(" ")
  return capitalizedString
}

function capitalizeWord(word){
  tempWord = word.substring(1).toLowerCase
  fixedWord = word[0].toUpperCase + tempWord
  return fixedWord
}

console.log(capitalizeEachWord('HEre is a tEsT'))