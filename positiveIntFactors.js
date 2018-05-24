function positiveIntFactors(int){
  factors = []
  for(i=2; i < int; i++){
    if (int % i == 0){
      factors.push(i)
    }
  }
  return factors
}
console.log(positiveIntFactors(24))