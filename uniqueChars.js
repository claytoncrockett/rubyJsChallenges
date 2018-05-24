function uniqueChars(string){
  var arr = string.split("")
  var newArr = []
  for(var i in arr){
    if (!newArr.includes(arr[i])){
      newArr.push(arr[i])
    }
  }
  newArr.join("")
  return newArr
}

console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"))