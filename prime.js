function isPrime(int){
  for(var i = 2; i < int; i++){
    if (int % i == 0){
      return false
    }
  }
  return true
}

console.log(isPrime(23))
console.log(isPrime(24))