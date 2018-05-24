function turnToCoins(amount, coins = [25,10,5,1]){
  finalCoins = []
  while (amount >= 25){
    finalCoins.push(25)
    amount -= 25
  }
  while (amount >= 10){
    finalCoins.push(10)
    amount -= 10
  }
  if (amount >= 5){
    finalCoins.push(5)
    amount -= 5
  }
  while (amount >= 1){
    finalCoins.push(1)
    amount -= 1
  }
  return finalCoins
}
console.log(turnToCoins(47))