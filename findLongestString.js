function findLongest(string){
  arr = string.split(" ")
  longest = arr[0].length
  wordToReturn = arr[0]
  for(var i = 1; i < arr.length; i++){
    if (arr[i].length > longest){
      wordToReturn = arr[i]
      longest = wordToReturn.length
    }
  }
  return wordToReturn
}

console.log(findLongest("Here is a pretty long sentence"))