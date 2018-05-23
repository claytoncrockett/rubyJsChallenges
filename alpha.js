function sortAlphabetical(word){
  wordSplit = word.split("")
  sorted = wordSplit.sort()
  newWord = sorted.join("")
  console.log(newWord)
}

sortAlphabetical('webmaster')