function turnToCoins(amount, coins = [25,10,5,1]){
  finalCoins = []
  for(var i in coins){
    while (amount >= coins[i]){
      finalCoins.push(coins[i])
      amount -= coins[i]
    }
  }
  return finalCoins
}
console.log(turnToCoins(47, [13,6,3,1]))
console.log(turnToCoins(97))